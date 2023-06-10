<!-- 配置车辆弹窗 -->
<template>
  <el-dialog
    title="配置车辆"
    :visible="dialogVisible"
    width="40%"
    :before-close="closeDialog"
    :close-on-click-modal="false"
    append-to-body
  >
    <div class="driver-info">
      <p>司机编号：{{ datas.userId }}</p>
      <p>司机名称：{{ datas.name }}</p>
      <p>司机电话：{{ datas.mobile }}</p>
      <p>所属机构：{{ datas.agency.name }}</p>
    </div>
    <div class="driver-config-car">
      <span>配置车辆：</span>
      <el-select
        v-model="value"
        placeholder="请输入车牌号"
        @change="handleCar(value)"
      >
        <el-option
          v-for="item in options"
          :key="item.id"
          :label="item.licensePlate"
          :value="item.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="driver-table">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="licensePlate"
          label="车牌号"
        > </el-table-column>
        <el-table-column
          prop="workStatus"
          label="车辆状态"
        >
          <template v-slot="{ row }">
            <span
              class="driver-workStatus"
              :class="{ work: row.workStatus }"
            >
              {{ row.workStatus ? '可用' : '禁用' }}
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
              class="search"
              @click="handleClick(scope.row.truckLicenseId)"
            >查看</el-button>
            <span style="color: #dcdfe6;margin: 0 5px;cursor: default;">|</span>
            <el-button
              type="text"
              size="small"
              class="delete"
              @click="deleteData"
            >删除</el-button>
          </template>
        </el-table-column>
        <template slot="empty">
          <img
            style="height: 80px;margin-top: 10px;"
            src="../../../assets/empty.png"
          >
          <p style="margin: 0;padding: 0;margin-top: -30px;">空空如也</p>
        </template>
      </el-table>
    </div>

    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="primary"
        @click="close"
      >确 定</el-button>
      <el-button
        class="cancel"
        @click="closeDialog"
      >取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { getTruckList } from '@/api/driver'
import { driverArrangeCar } from '@/api/transit'
export default {
  name: 'CarConfig',
  props: {
    data: {
      type: Object,
      default: null
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      datas: '',
      dialogVisible: false,
      options: [],
      value: '',
      tableData: [],
      currentId: null
    }
  },
  async created() {
    this.dialogVisible = this.open
    this.datas = this.data
    if (this.datas.truck) {
      this.tableData.push(this.datas.truck)
      this.value = this.datas.truck.licensePlate
      this.currentId = this.datas.truck.id
    } else {
      this.value = null
      this.currentId = null
    }
    const { data } = await getTruckList()
    this.options = data
  },
  methods: {
    deleteData() {
      this.tableData = []
      this.value = ''
      this.currentId = ''
    },
    closeDialog() {
      this.$emit('handleClose', false)
    },
    handleCar(id) {
      this.currentId = id
      const ids = this.options.find(item => item.id === id)
      if (ids) this.tableData.splice(0, 1, ids)
    },
    // 查看
    handleClick(id) {
      console.log(id)
      this.$router.push(
        {
          name: 'vehicle-detail',
          query: {
            id
          }
        })
    },
    async close() {
      const res = await driverArrangeCar({ driverIds: [this.datas.userId], truckId: this.currentId })
      if (res.code === 200) {
        this.$message.success('配置成功')
        this.$emit('handleClose', false)
      } else {
        this.$message.error(res.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.serchBox {
  width: 584px;
  margin: 0 auto;
  margin-top: 19px;
  .el-select {
    width: 238px;
  }
  margin-bottom: 20px;
}
.workTime {
  white-space: nowrap;
}
.header {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  width: 584px;
  height: 90px;
  background-color: #fbfafa;
  flex-wrap: wrap;
  padding: 21px 52px;
  margin: 0 auto;
  // 使得整体内容距离上部分的距离为20px
  margin-top: -10px;
  .el-input {
    width: 240px;
  }
  div {
    flex: 40%;
    // 使包裹的所有div的上下间距为14px
    // margin-bottom: 14px;
  }
  .num,
  .iphone {
    flex: 60%;
  }
  .num,
  .name {
    margin-bottom: 14px;
  }
  label {
    width: 71px;
    height: 20px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 14px;
    color: #20232a;
    letter-spacing: 0.16px;
    text-align: right;
  }
  span {
    color: #818693;
    font-size: 14px;
  }
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
.pagination {
  margin: 32px 0 44px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px !important;
  color: #20232a !important;
}
.selected-driver {
  margin-top: 18px;
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
.driver-info {
  margin: 0 15px 15px;
  padding: 10px 42px;
  background-color: #fbfafa;
  display: flex;
  flex-wrap: wrap;
  p {
    &:nth-child(1) {
      width: 60%;
    }
    &:nth-child(3) {
      width: 60%;
    }
  }
}
.driver-config-car {
  width: 340px;
  align-items: center;
  display: flex;
  margin-left: 15px;
  span {
    width: 110px;
    font-size: 16px;
    font-weight: 500;
  }
}
.driver-table {
  margin: 15px 15px 0;
  .search {
    color: #419eff;
  }
  .delete {
    color: #f56c6c;
  }
}
::v-deep .el-dialog__footer{
  text-align: center;
}
.dialog-footer{
  display: block;
  margin-bottom: 20px;
  ::v-deep .el-button {
    padding:12px 30px;
  }
  ::v-deep .el-button.el-button--primary {
    background-color: #e15536;
    border: 0;
  }
}
</style>
