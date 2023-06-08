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
            :value="item.name"
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
        <el-button type="danger">搜索</el-button>
        <el-button @click="reset">重置</el-button>
      </div>
    </div>
    <!-- 全部 -->
    <div class="header-to">
      <div><el-button @click="truck">全部 {{ total }}</el-button> </div>
      <div><el-button @click="usable">可用 {{ usables }}</el-button> </div>
      <div><el-button @click="outOfservice">停用 {{ service }}</el-button></div>
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
          @current-change="handleCurrentChange"
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
            <template>
              <el-button
                type="text"
                size="small"
              >查看详情</el-button>
              <el-button
                type="text"
                size="small"
              >启用</el-button>
              <el-button
                type="text"
                size="small"
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
          :total="400"
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
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-input v-model="formLabelAlign.region"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="formLabelAlign.type"></el-input>
        </el-form-item>
      </el-form>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getvehicles, getTruckTypeld, getUnusedTrucks, getUsedTrucks } from '@/api/vehicle'
export default {
  name: 'Vehicle',
  data() {
    return {
      options: [], // 车辆类型数组
      value: '', // 车辆类型
      License: '', // 车辆号码
      tableData: [], // 表格数组
      usables: 0, // 可用车辆数量
      service: 0, // 停用车辆数量
      total: 0, // 总数量
      dialogVisible: false, // 新增车辆弹框
      truckForm: {
        page: 1,
        pageSize: 5
      }
    }
  },
  created() {
    this.vehicle() // 车辆类型
    // this.usable()// 可用车辆
    // this.outOfservice()// 停用车辆
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
      const res = await getTruckTypeld(this.truckForm)
      this.total = res.data.counts // 获取总数
      this.tableData = res.data.items// 获取数组
    },
    // 重置车辆选择
    reset() {
      this.value = ''
      this.License = ''
    },
    // 可用的车辆
    async usable() {
      const res = await getUsedTrucks()
      this.usables = res.data.length
      this.tableData = res.data// 获取数组
    },
    // 停用的车辆
    async outOfservice() {
      const res = await getUnusedTrucks()
      this.service = res.data.length
      this.tableData = res.data// 获取数组
    },
    // 添加车辆
    add() {
      this.dialogVisible = true
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row)
    },
    // 每页多少条
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.truckForm.pageSize = val
      this.truck()
    },
    // 当前多少页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.truckForm.page = val
      this.truck()
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
  background-color: #fff;
  display: flex;
  div {
    width: 120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
.block{
  text-align: center;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
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
