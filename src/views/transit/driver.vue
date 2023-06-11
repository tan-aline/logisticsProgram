<!-- 车辆管理 -->
<template>
  <div class="dashboard-container driver customer-list-box">
    <div class="driver-search">
      <div class="driver-base">
        <label
          for="dricerAccount"
          class="el-form-item__label"
        >司机账号:</label>
        <el-input
          id="dricerAccount"
          v-model="info.account"
          placeholder="请输入司机账号"
          clearable
        />
        <label
          for="dricerName"
          class="el-form-item__label"
        >司机姓名:</label>
        <el-input
          id="dricerName"
          v-model="info.name"
          placeholder="请输入司机姓名"
          clearable
        />
        <label
          for="dricerPhone"
          class="el-form-item__label"
          style="width: 90px"
        >司机手机号:</label>
        <el-input
          id="dricerPhone"
          v-model="info.phone"
          placeholder="请输入司机手机号"
          clearable
        />
      </div>
      <div class="dirver-buttom">
        <div class="driver-Organization">
          <label
            for="driverOrganization"
            class="el-form-item__label driverOrganization"
          >所属机构:</label>
          <treeselect
            v-model="info.agentId"
            :options="options"
            search-nested
            placeholder="请选择所属机构"
            :normalizer="normalizer"
          />
        </div>
        <el-button
          type="primary"
          @click="getDriverData"
        >搜索</el-button>
        <el-button
          class="cancel"
          @click="reset"
        >重置</el-button>
      </div>
    </div>
    <div class="driver-table">
      <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%"
        stripe
        height="415"
        class="driver-table-data"
      >
        <el-table-column
          type="index"
          :index="indexAdd"
          label="序号"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="account"
          label="司机账号"
        > </el-table-column>
        <el-table-column
          prop="name"
          label="司机姓名"
        > </el-table-column>
        <el-table-column
          prop="mobile"
          label="司机电话"
        > </el-table-column>
        <el-table-column
          prop="truck.licensePlate"
          label="关联车辆"
        >
        </el-table-column>
        <el-table-column
          prop="agency.name"
          label="所属机构"
        > </el-table-column>
        <el-table-column
          prop="workStatus"
          label="工作状态"
        >
          <template v-slot="{ row }">
            <span
              class="driver-workStatus"
              :class="{ work: row.workStatus }"
            >
              {{ row.workStatus ? '上班' : '休息' }}
            </span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          header-align="center"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="handleLookDriverInfo(scope.row.userId)"
            >
              查看
            </el-button>
            <span class="handleOption"></span>
            <el-button
              type="text"
              size="small"
              @click="handleVehicle(scope.row)"
            >
              配置车辆
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row
        class="opeate-tools"
        type="flex"
        justify="center"
      >
        <el-pagination
          :current-page="info.page"
          :page-sizes="[10, 15, 20, 30]"
          :page-size="info.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="counts"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-row>
      <el-dialog
        title="车辆配置"
        :visible="dialogVisible"
        width="30%"
        :before-close="handleCloseCarConfig"
      >
        <p>配置车辆需满足以下条件：</p>
        <div class="handleVehicleConfirm">
          <p><span>1</span>司机信息已完善</p>
          <p><span>2</span>司机已设置排班</p>
          <p><span>3</span>司机绑定车辆未在启用状态</p>
        </div>
        <span
          slot="footer"
          class="dialog-footer"
        >
          <el-button
            class="cancel"
            @click="dialogVisible = false"
          >取 消</el-button>
          <el-button
            type="primary"
            @click="handleCloseConfig"
          >确 定</el-button>
        </span>
      </el-dialog>
      <div
        v-if="isCarConfig"
        class="car-config"
      >
        <carConfig
          :data="data"
          :open="isCarConfig"
          @handleClose="handleClose"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getDriverInfo, getAgencyList } from '@/api/driver'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
import carConfig from './components/car-config.vue'
export default {
  name: 'Courses',
  components: { Treeselect, carConfig },
  data() {
    return {
      loading: false,
      // 所属机构总列表
      options: [],
      // 发请求数据
      info: {
        // 当前页
        page: 1,
        // 一页多少条数据
        pageSize: 10,
        // 搜索框
        account: '',
        name: '',
        phone: '',
        agentId: null
      },
      // 表格数据
      tableData: [],
      // 总数据条数
      counts: 40,
      dialogVisible: false, // 配置车辆确认框
      isCarConfig: false,
      // 当前数据
      data: ''
    }
  },
  mounted() {
    this.getDriverData()
    this.getOrganizationInfo()
  },
  methods: {
    // 序号
    indexAdd(index) {
      const page = this.info.page
      const pagesize = this.info.pageSize
      return index + 1 + (page - 1) * pagesize
    },
    // 树形结构匹配字段
    normalizer(node) {
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    },
    handleSizeChange(val) {
      this.info.pageSize = val
      this.getDriverData()
    },
    handleCurrentChange(val) {
      this.info.page = val
      this.getDriverData()
    },
    // 配置车辆
    handleCloseCarConfig() {
      this.dialogVisible = false
    },
    handleCloseConfig() {
      this.dialogVisible = false
      this.isCarConfig = true
    },
    handleVehicle(data) {
      this.dialogVisible = true
      this.data = data
    },
    handleClose(type) {
      this.isCarConfig = type
      // console.log(status.data)
    },
    // 查看司机详情
    handleLookDriverInfo(id) {
      this.$router.push({
        name: 'driver-detail',
        query: { id }
      })
    },
    // 获取司机列表
    async getDriverData() {
      this.loading = true
      const newInfo = {}
      for (const key in this.info) {
        if (this.info[key] && key !== page && key !== pageSize) {
          newInfo[key] = this.info[key]
        }
      }
      const {
        data: { counts, pageSize, page, items }
      } = await getDriverInfo(newInfo)
      this.counts = Number(counts)
      this.info.pageSize = pageSize
      this.info.page = page
      this.tableData = items
      this.loading = false
    },
    // 获取树状机构信息
    async getOrganizationInfo() {
      const { code, data } = await getAgencyList()
      if (code === 200) this.options = JSON.parse(data)
    },
    // 重置数据
    reset() {
      this.info = {
        account: '',
        name: '',
        phone: '',
        agentId: null,
        pageSize: 10,
        page: 1
      }
      this.getDriverData()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px;
}
.pagination {
  margin-top: 40px;
}
// 下拉框
/deep/ .el-select {
  width: 100%;
}

/deep/ .el-card {
  overflow: initial;
}
// 司机搜索框部分
.driver-search {
  margin: 20px;
  padding: 20px 50px 20px 0;
  background-color: #fff;
  border-radius: 4px;
  .driver-base,
  .dirver-buttom {
    display: flex;
  }
  .el-form-item__label {
    color: #20232a;
    font-weight: 400;
    text-align: right;
    box-sizing: border-box;
    white-space: nowrap;
    width: 80px;
    margin-left: 40px;
  }
  .dirver-buttom {
    padding-top: 20px;
  }
  ::v-deep .el-button {
    padding: 0 30px;
  }
  ::v-deep .el-button.el-button--primary {
    background-color: #e15536;
    border: 0;
  }
  ::v-deep .el-button.el-button--default {
    background-color: #fff;
    padding: 0 30px;
    &:hover {
    background: #ffeeeb;
    border: 1px solid #f3917c;
    color: #e15536;
  }
  }
  :v-deep .el-button:active {
  background-color: red;
}
  .driver-Organization {
    display: flex;
    height: 40px;
    padding-right: 45px;
    width: 495px;
  }
  ::v-deep .el-input__inner {
    height: 40px;
    width: 340px;
  }
}
.cancel {
  color: #2a2929;
  border: 1px solid #d8dde3;
  border-radius: 5px;
  font-weight: 400;
  &:hover {
    background: #ffeeeb;
    border: 1px solid #f3917c;
    color: #e15536;
  }
}
/* 选中状态 */
::v-deep .el-pager li.active {
  color: #e15536;
}

/* hover 状态 */
::v-deep .el-pager li:hover {
  color: #e15536;
}
.driver-table {
  margin: 20px;
  margin-bottom: 15px;
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;
  .opeate-tools {
    margin: 20px;
  }
}
//table滚动条样式
/* 控制滚动条的宽度 */
.driver-table ::-webkit-scrollbar {
  width: 12px;
}
/* 控制滚动条轨道的颜色、圆角等 */
.driver-table ::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 5px;
}
.driver-table ::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #dddee0;
}
.driver-workStatus {
  position: relative;
  padding-left: 18px;
}
.driver-workStatus::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  left: 6px;
  top: 4px;
  background-color: #e15536;
}
.driver-workStatus.work::before {
  background-color: #1dc779;
}
::v-deep .el-button.el-button--primary {
  background-color: #e15536;
  border: 0;
}
.handleOption::before {
  content: '|';
  margin: 0 4px;
  color: #cacaca;
}
.car-config {
  position: absolute;
  z-index: 1;
}
//配置车辆确认
.handleVehicleConfirm {
  display: flex;
  flex-wrap: wrap;
  color: #20232a;
  p {
    margin: 0 0 13px 12px;
    &:nth-child(2) {
      margin-left: 90px;
    }
    span {
      width: 16px;
      height: 16px;
      background: rgb(250, 252, 255);
      border: 1px solid rgb(235, 238, 245);
      border-radius: 50%;
      display: inline-block;
      text-align: center;
      margin-right: 6px;
      line-height: 15px;
    }
  }
}
</style>
