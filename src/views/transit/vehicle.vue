<!-- 车辆列表 -->
<template>
  <div class="dashboard-container vehicle customer-list-box">
    <!-- 头部 -->
    <div class="header">

      <div class="left">
        <span>车辆类型：</span>
        <el-select
          v-model="value"
          class="select"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </div>

      <div class="center">
        车牌号码：<input
          v-model="License"
          type="text"
          placeholder="请输入车牌号码"
        />
      </div>

      <div class="right">
        <el-button
          type="danger"
          @click="search(value)"
        >搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>
    <!-- 全部 -->
    <div class="header-to">
      <div
        @click="truck"
      >全部 {{ totals }} </div>
      <div
        @click="usable"
      >可用 {{ usables }} </div>
      <div
        @click="outOfservice"
      >停用 {{ service }}</div>
    </div>
    <!-- 表格 -->
    <el-card class="box-card">
      <div
        slot="header"
        class="clearfix"
      >
        <el-button
          type="danger"
          round
          @click="add"
        >新增车辆</el-button>
      </div>
      <template>
        <el-table
          ref="singleTable"
          :data="tableData"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column
            label="序号"
            type="index"
            width="80"
          >
          </el-table-column>
          <el-table-column
            prop="licensePlate"
            label="车牌号码"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="truckTypeName"
            label="车辆类型"
            width="120"
          >
          </el-table-column>
          <el-table-column
            prop="driverNum"
            label="司机数量"
          >
          </el-table-column>
          <el-table-column
            prop="workStatus"
            label="车辆状态"
          >
            <template v-slot="{ row }">
              <span>{{ row.workStatus=== 1 ? "启用" : "停用" }}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="deviceGpsId"
            label="GPS设备ID"
          >
          </el-table-column>
          <el-table-column
            prop="allowableLoad"
            label="实载重量（T）"
          >
          </el-table-column>
          <el-table-column
            prop="allowableVolume"
            label="实载体积（方）"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            width="200"
          >
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="ViewDetails(scope.row.id)"
              >查看详情</el-button>
              <el-button
                type="text"
                size="small"
                @click="open"
              >启用</el-button>
              <el-button
                type="text"
                size="small"
                @click="bind(scope.row.id)"
              >配置司机</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          :current-page="truckForm.page"
          :page-sizes="[5, 15, 20, 25]"
          :page-size="truckForm.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-card>
    <!-- 新增车辆弹框 -->
    <el-dialog
      title="新增车辆"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form
        ref="formLabelAlign"
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        :rules="rules"
      >
        <el-form-item
          label="车辆类型"
          prop="truckTypeId"
        >
          <el-select
            v-model="formLabelAlign.truckTypeId"
            class="select"
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="车辆号码"
          prop="licensePlate"
        >
          <el-input
            v-model="formLabelAlign.licensePlate"
            placeholder="请输入车牌号码"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="GPS设备ID"
          prop="deviceGpsId"
        >
          <el-input
            v-model="formLabelAlign.deviceGpsId"
            placeholder="请输入GPS设备ID"
          ></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="addTrucker"
        >确 定</el-button>
        <el-button @click="resetTrucker">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 配置司机 -->
    <el-dialog
      title="配置司机"
      :visible.sync="configurationDriver"
      width="40%"
    >
      <div class="box">
        <!-- 司机详情 -->
        <div class="box-top">
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">车牌号：{{ form.licensePlate }}</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">车型：{{ form.truckTypeName }}</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">车辆状态：{{ form.workStatus=== 1 ? "启用" : "停用" }} </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-light">实载重量：{{ form.allowableLoad }} 吨</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="12"><div class="grid-content bg-purple">实载体积：{{ form.allowableVolume }} m³</div></el-col>
          </el-row>
        </div>
        <!-- 下拉框 -->
        <div class="box-select">
          <el-form label-width="80px">
            <el-form-item label="配置司机">
              <el-select
                v-model="value"
                placeholder="请输入司机名称"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <!-- 表格 -->
        <div class="box-footer">
          <el-table
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column
              type="index"
              label="序号"
              width="100"
            >
            </el-table-column>
            <el-table-column
              property="date"
              label="司机名称"
            >
            </el-table-column>
            <el-table-column
              property="address"
              label="操作"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="configurationDriver = false"
        >确 定</el-button>
        <el-button @click="configurationDriver = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getvehicles, getTruckTypeld, addTrucker, getTrucker } from '@/api/vehicle'
export default {
  name: 'Vehicle',
  data() {
    return {
      // 状态值
      status: 'all',
      activeName: 'second',
      options: [], // 车辆类型数组
      value: '', // 车辆类型
      License: '', // 车辆号码
      tableData: [], // 表格数组
      usables: 0, // 可用车辆数量
      service: 0, // 停用车辆数量
      total: 0, // 总数量
      totals: 0, // 总数量
      dialogVisible: false, // 新增车辆弹框
      configurationDriver: false, // 司机配置弹框
      truckForm: {
        page: 1,
        pageSize: 5
      },
      labelPosition: 'right',
      formLabelAlign: {
        truckTypeId: null,
        licensePlate: '',
        deviceGpsId: ''
      },
      rules: {
        licensePlate: [
          { required: true, message: '请输入车牌号码', trigger: 'blur' },
          { pattern: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/, message: '车牌格式不正确', trigger: 'blur' }
        ],
        deviceGpsId: [{ required: true, message: '请输入GPS设备ID', trigger: 'blur' }]
      },
      form: {
        id: '',
        licensePlate: '',
        truckTypeName: '',
        allowableVolume: null,
        allowableLoad: null,
        deviceGpsId: '',
        workStatus: 0
      }
    }
  },
  created() {
    this.vehicle() // 车辆类型
    this.usable()// 可用车辆
    this.outOfservice()// 停用车辆
    this.truck()// 全部
  },
  methods: {
    // 获取页面车辆类型数据
    async vehicle() {
      const res = await getvehicles()
      this.options = res.data
    },
    // 获取车辆类型列表  全部
    async truck() {
      this.status = 'all'
      const res = await getTruckTypeld(this.truckForm)
      this.total = Number(res.data.counts) // 获取总数
      this.totals = Number(res.data.counts) // 获取总数
      this.tableData = res.data.items// 获取数组
    },
    // 重置车辆选择
    reset() {
      this.value = ''
      this.License = ''
    },
    // 搜索车辆
    async search(id) {
      console.log(id)
      this.status = 'search'
      const res = await getTruckTypeld({
        page: this.truckForm.page,
        pageSize: this.truckForm.pageSize,
        truckTypeId: id,
        licensePlate: this.License
      })
      this.total = Number(res.data.counts)
      this.tableData = res.data.items
    },
    // 可用的车辆
    async usable() {
      this.status = 'able'
      const res = await getTruckTypeld({
        page: this.truckForm.page,
        pageSize: this.truckForm.pageSize,
        workStatus: 1
      })
      this.total = Number(res.data.counts)
      this.usables = Number(res.data.counts)
      this.tableData = res.data.items// 获取数组
    },
    // 停用的车辆
    async outOfservice() {
      this.status = 'disable'
      const res = await getTruckTypeld({
        page: this.truckForm.page,
        pageSize: this.truckForm.pageSize,
        workStatus: 0
      })
      this.total = Number(res.data.counts)
      this.service = Number(res.data.counts)
      this.tableData = res.data.items// 获取数组
    },
    // 添加车辆弹框
    add() {
      this.dialogVisible = true
    },
    // 确认添加车辆
    async addTrucker () {
      await addTrucker(this.formLabelAlign)
      this.$message.success('添加车辆成功')
      this.resetTrucker()
      this.truck() // 重新渲染页面
    },
    // 关闭添加车辆,清空数据
    resetTrucker() {
      this.dialogVisible = false // 关闭提示框
      this.formLabelAlign = {
        truckTypeId: null,
        licensePlate: '',
        deviceGpsId: ''
      }
    },
    // 查看详情
    ViewDetails(id) {
      this.$router.push(
        {
          name: 'vehicle-detail',
          query: {
            id
          }
        })
    },
    requestType() {
      if (this.status === 'all') {
        this.truck()
      } else if (this.status === 'able') {
        this.usable()
      } else if (this.status === 'disable') {
        this.outOfservice()
      } else {
        this.search(this.value)
      }
    },
    // 每页多少条
    handleSizeChange(val) {
      // truck---全部
      // usable---可用
      // outOfservice---停用
      console.log(`每页 ${val} 条`)
      this.truckForm.pageSize = val
      this.requestType()
    },
    // 当前多少页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.truckForm.page = val
      this.requestType()
    },
    // 启用弹框
    open() {
      this.$confirm('确认要启用吗？车辆启用需满足以下条件： <div class="rsdsa"><span>1 车辆信息已完善</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2 绑定司机>=2,且有排班</span> </div>', '车辆启用', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'error',
          message: '请先绑定2个司机'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    // 配置司机
    bind(id) {
      this.$confirm('配置司机需满足以下条件： <div class="rsdsa"><span>1 车辆信息已完善</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>2 车辆无未完成运输任务</span> </div>', '车辆配置', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      }).then(async() => {
        this.configurationDriver = true
        const res = await getTrucker(id)
        console.log(res.data)
        this.form.id = res.data.id
        this.form.licensePlate = res.data.licensePlate
        this.form.truckTypeName = res.data.truckTypeName
        this.form.allowableVolume = res.data.allowableVolume
        this.form.allowableLoad = res.data.allowableLoad
        this.form.deviceGpsId = res.data.deviceGpsId
        this.form.workStatus === res.data.workStatus
        console.log(id)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    handleClick(tab) {
      console.log(tab)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px;
}
.pagination {
  margin-top: 10px;
}
.vehicle /deep/ .el-table td,
.el-table th {
  padding: 12px 0;
  min-width: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  overflow: hidden;
}

.vehicle {
  padding: 0 20px;
  /deep/ .el-dialog__title {
    width: 73px;
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #20232a;
    line-height: 25px;
    letter-spacing: 0px;
  }
  /deep/ .el-dialog__body {
    text-align: center;
    padding: 20px 20px 0px 20px;
  }
  .warn-img {
    width: 40px;
  }
  p {
    height: 24px;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    color: #818693;
    line-height: 24px;
  }
}
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    width: 40%;
    height: 60px;
    margin-left: 20px;
    span {
      width: 120px;
    }
    .select {
      width: 240px;
      border-radius: 8px;
    }
  }
  .center{
    width: 30%;
    height: 60px;
    input {
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  .right{
    width: 30%;
    height: 60px;
  }
}
.header-to {
  margin-top: 20px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  display: flex;
  div {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
  }
}
.active {
    background-color: #ffeeeb;
    color: #e15536;
}
.block{
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.box {
  height: 500px;
  .box-top {
    height: 130px;
    background-color: #fbfafa;
  }
  .box-select {
    margin-top: 20px;
  }
  .box-footer {
    margin-top: 20px;
  }
}
::v-deep .el-dialog__footer {
  text-align: center;
}
.el-card__body  {
  margin-bottom: 20px;
}

// 下拉框
/deep/ .el-select {
  width: 100%;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    margin-top: 20px;
    padding-bottom: 30px;
  }
    .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

<style>
.startconfirm {
  width: 481px;
}
.startconfirm .el-message-box__header {
  padding-bottom: 4px;
}
.startconfirm .el-message-box__container {
  margin-bottom: 15px;
}
.confirm .el-message-box__status.el-icon-warning {
  left: 70px;
}
.confirm.el-message-box__title {
  font-size: 16px;
}
.confirm .el-message-box__message p {
  color: #f92d2d;
  margin-top: 5px;
}
.confirm .el-message-box__btns {
  text-align: center;
  margin-top: 10px;
}

</style>
