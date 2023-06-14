<!-- 订单管理 -->
<template>
  <div
    class="dashboard-container
  order-list customer-list-box"
    style="width: 100%;"
  >
    <div class="alert">
      <el-form
        ref="stateRuleForm"
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
        style="display: flex;
        "
      >
        <div style="width: 100%;margin-top: 25px;">
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="订单编号:"
              >
                <el-input
                  v-model="formLabelAlign.ordernumber"
                  placeholder="请输入订单编号"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="发件人姓名:"
              >
                <el-input
                  v-model="formLabelAlign.sendername"
                  placeholder="请输入发件人姓名"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="收件人姓名:"
              >
                <el-input
                  v-model="formLabelAlign.receiverName"
                  placeholder="请输入收件人姓名"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div style="width: 100%;margin-top: 25px;">
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="订单状态:"
              >
                <el-select
                  v-model="formLabelAlign.status"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in statusListOptins"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="发件人电话:"
              >
                <el-input
                  v-model="formLabelAlign.senderphone"
                  placeholder="请输入发件人电话"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="收件人电话:"
              >
                <el-input
                  v-model="formLabelAlign.receiverPhone"
                  placeholder="请输入收件人电话"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div style="width: 100%;margin-top: 25px;">
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="付费状态:"
              >
                <el-select
                  v-model="formLabelAlign.typeof"
                  placeholder="请选择"
                >
                  <el-option
                    label="未付"
                    value="1"
                  ></el-option>
                  <el-option
                    label="已付"
                    value="2"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="发件人地址:"
              >
                <div style="display: flex;justify-content: space-between;">
                  <el-col
                    :span="7"
                  >
                    <el-select
                      v-model="recipientaddress"
                      placeholder="请选择省"
                      clearable
                      @change="getCityshiList1"
                    >
                      <el-option
                        v-for="item in cityList"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col
                    :span="8"
                  >
                    <el-select
                      v-model="recipientaddress2"
                      placeholder="请选择市"
                      clearable
                      @change="getCityshiList2"
                    >
                      <el-option
                        v-for="item in cityList2"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col
                    :span="8"
                  >
                    <el-select
                      v-model="recipientaddress3"
                      placeholder="请选择县/区"
                      clearable
                    >
                      <el-option
                        v-for="item in cityList3"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="22">
              <el-form-item
                label-width="120px"
                label="收件人地址:"
              >
                <div style="display: flex;justify-content: space-between;">
                  <el-col
                    :span="7"
                  >
                    <el-select
                      v-model="senderaddress"
                      placeholder="请选择省"
                      clearable
                      @change="getCityshiList4"
                    >
                      <el-option
                        v-for="item in cityList4"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col
                    :span="8"
                  >
                    <el-select
                      v-model="senderaddress2"
                      placeholder="请选择市"
                      clearable
                      @change="getCityshiList5"
                    >
                      <el-option
                        v-for="item in cityList5"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                  <el-col
                    :span="8"
                  >
                    <el-select
                      v-model="senderaddress3"
                      placeholder="请选择县/区"
                      clearable
                    >
                      <el-option
                        v-for="item in cityList6"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-col>
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </div>

        <div style="position: absolute;bottom: -5px;left: -50px;">
          <el-form-item>
            <el-button
              type="warning"
              @click="submitForm('stateRuleForm')"
            >搜索</el-button>
            <el-button
              class="cancel"
              type="default"
              @click="resetForm('stateRuleForm')"
            >重置</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div
      style="margin-left: 20px;
      background-color: #ffffff;
      margin-right: 20px;
    margin-bottom: 20px;
    padding-bottom: 60px;
    overflow-x: auto;
    "
    >
      <el-table
        v-loading="loading"
        element-loading-text="加载中"
        :data="eltableList"
        style="overflow-x: auto;
        width: 100%;
        "
        stripe
      >
        <el-table-column
          type="index"
          :index="indexAdd"
          label="序号"
          width="60"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="订单编号"
          width="170"
        >
        </el-table-column>
        <el-table-column
          prop="transportOrder"
          label="运单编号"
          width="130"
        >
          <template v-slot="{row}">
            {{ row.transportOrder.id }}
          </template>
        </el-table-column>
        <el-table-column
          prop="createTime"
          label="下单时间"
          width="160"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          label="订单状态"
          width="80"
        >
          <template v-slot="{row}">
            {{ row.status===23000? '待取件': row.status===23001? '已取件':
              row.status===23002? '网点自寄':row.status===23003? '网点入库':
                row.status===23004? '待装车':row.status===23005? '运输中':
                  row.status===23006? '网点入库':row.status===23007? '待派送':
                    row.status===23008? '派送中':row.status===23009? '已签收':
                      row.status===23010? '拒收':'已取消'
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="senderName"
          label="发件人姓名"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="senderPhone"
          label="发件人电话"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="senderAddress"
          label="发件人地址"
          width="150"
        >
          <template v-slot="{row}">
            {{
              `
              ${row.senderProvince.name}
              ${row.senderCity.name}
              ${row.senderCounty.name}
              ${row.senderAddress}
              `
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="receiverName"
          label="收件人姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="receiverPhone"
          label="收件人电话"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="receiverAddress"
          label="收件人地址"
          width="130"
        >
          <template v-slot="{row}">
            {{
              `
              ${row.receiverProvince.name}
              ${row.receiverCity.name}
              ${row.receiverCounty.name}
              ${row.receiverAddress}
              `
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="pickupType"
          label="取件类型"
          width="110"
        >
          <template v-slot="{row}">
            <!-- 1为网点自寄，2为上门取件 -->
            {{
              row.pickupType === 1? '网点自寄':'上门取件'
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="paymentMethod"
          label="付费类型"
          width="120"
        >
          <template v-slot="{row}">
            <!-- 付款方式,1.预结2到付 -->
            {{
              row.paymentMethod === 1? '预结':'到付'
            }}
          </template>
        </el-table-column>
        <el-table-column
          prop="paymentStatus"
          label="付费状态"
          width="100"
        >
          <template v-slot="{row}">
            <!-- 付款状态,1.未付2已付 -->
            {{
              row.paymentStatus === 1? '未付':'已付'
            }}
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="110"
        >
          <template v-slot="{row}">
            <el-button
              type="text"
              size="small"
              @click="handleClick(row.id)"
            >查看详情</el-button>
          </template>
        </el-table-column>
        <template
          slot="empty"
        >
          <div>
            <img
              v-if="!loading"
              src="https://fe-slwl-manager.itheima.net/static/img/icon-empty.3abd3b9a.png"
              width="336"
              height="232"
            >
            <p v-if="!loading">没有找到您要的内容哦~</p>
          </div>
        </template>
      </el-table>
      <template v-if="eltableList">
        <el-pagination
          v-loading="loading"
          style="margin-top: 20px;
          transform:translate(-50%,0);
          margin-left: 50%;"
          :page-sizes="[10, 20, 30, 50]"
          :page-size.sync="elarry.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="elarry.total"
          :current-page="elarry.page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </template>
    </div>
  </div>
</template>
<script>
import statusListOptins from '@/api/orderstatus.json'
import { orderCity, orderList } from '@/api/order'
export default {
  data() {
    return {
      loading: true,
      loadingpagination: true,
      labelPosition: 'right',
      statusListOptins: statusListOptins,
      cityList: [],
      cityList2: [],
      cityList3: [],
      recipientaddress: '',
      recipientaddress2: '',
      recipientaddress3: '',
      cityList4: [],
      cityList5: [],
      cityList6: [],
      senderaddress: '',
      senderaddress2: '',
      senderaddress3: '',
      formLabelAlign: {
        ordernumber: '',
        sendername: '',
        receiverName: '',
        status: '',
        senderphone: '',
        receiverPhone: '',
        typeof: ''
      },
      elarry: {
        page: 1,
        pageSize: 10,
        total: 0
      },
      eltableList: [],
      isOrderShow: false
      // eltableList: {

      //   id: null, // 运单编号
      //   amount: '', // 金额
      //   createTime: '', // 下单时间
      //   status: '', // 订单状态: 23000为待取件,23001为已取件，23002为网点自寄，23003为网点入库，23004为待装车，
      //   memberId: null, // 客户id
      //   orderType: '', // 订单类型，1为同城订单，2为城际订单
      //   paymentMethod: '', // 付款方式,1.预结2到付
      //   paymentStatus: '', // 付款状态,1.未付2已付
      //   pickupType: '', // 取件类型，1为网点自寄，2为上门取件
      //   receiverAddress: '', // 收件人详细地址
      //   receiverCityId: '', // 收件人城市id
      //   receiverCountyId: '', // 收件人区域id
      //   receiverName: '', // 收件人姓名
      //   receiverPhone: '', // 收件人电话
      //   receiverProvinceId: '', // 收件人省份id
      //   senderAddress: '', // 发件人详细地址
      //   senderCityId: '', // 发件人城市id
      //   senderCountyId: '', // 发件人区域id
      //   senderName: '', // 发件人姓名
      //   senderPhone: '', // 发件人电话
      //   senderProvinceId: '', // 发件人省份id
      //   transportOrder: ''// 运单编号
      // }
    }
  },
  watch: {
    recipientaddress: {
      immediate: false,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.cityList2 = []
          this.cityList3 = []
          setTimeout(() => {
            this.recipientaddress2 = ''
            this.recipientaddress3 = ''
          }, 1000)
        }
      }
    },
    // 收件人
    senderaddress: {
      immediate: false,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.cityList5 = []
          this.cityList6 = []
          setTimeout(() => {
            this.senderaddress2 = ''
            this.senderaddress3 = ''
          }, 1000)
        }
      }
    },
    recipientaddress2: {
      immediate: false,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.cityList3 = []
          this.recipientaddress3 = ''
        }
      }
    },
    // 收件人
    senderaddress2: {
      immediate: false,
      handler(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.cityList6 = []
          this.senderaddress3 = ''
        }
      }
    }
  },
  created() {
    this.getCityList()
    this.getOrderList()
  },
  methods: {
    // 获取分页数据
    async getOrderList() {
      const res = await orderList(this.elarry)
      this.eltableList = res.data.items
      this.loading = false
      this.elarry.total = +res.data.counts
    },
    // 序号
    indexAdd(index) {
      const page = this.elarry.page
      const pagesize = this.elarry.pageSize
      return index + 1 + (page - 1) * pagesize
    },
    // 获取地区0
    async getCityList() {
      const res = await orderCity(0)
      this.cityList = res.data
      this.cityList4 = res.data
    },
    // 获取地区1
    async getCityshiList1() {
      if (this.recipientaddress) {
        const res = await orderCity(this.recipientaddress)
        this.cityList2 = res.data
      }
      if (this.recipientaddress === '') {
        this.cityList2 = []
        this.cityList3 = []
        this.recipientaddress2 = ''
        this.recipientaddress3 = ''
      }
    },
    // 获取地区5
    async getCityshiList4() {
      if (this.senderaddress) {
        const res = await orderCity(this.senderaddress)
        this.cityList5 = res.data
      }
      if (this.senderaddress === '') {
        this.cityList5 = []
        this.cityList6 = []
        this.senderaddress2 = ''
        this.senderaddress3 = ''
      }
    },
    // 获取地区2
    async getCityshiList2() {
      if (this.recipientaddress2) {
        const res = await orderCity(this.recipientaddress2)
        this.cityList3 = res.data
      }
      if (this.recipientaddress2 === '') {
        this.cityList3 = []
        this.recipientaddress3 = ''
      }
    },
    // 获取地区2
    async getCityshiList5() {
      if (this.senderaddress2) {
        const res = await orderCity(this.senderaddress2)
        this.cityList6 = res.data
      }
      if (this.senderaddress2 === '') {
        this.cityList6 = []
        this.senderaddress3 = ''
      }
    },
    // 搜索
    async submitForm() {
      this.loading = true
      const res = await orderList({
        id: this.formLabelAlign.ordernumber, // 订单编号
        page: 1,
        pageSize: this.elarry.pageSize,
        paymentStatus: this.formLabelAlign.typeof,
        pickUpType: '',
        receiverCityId: this.senderaddress2, // 收件人地址第二个
        receiverCountyId: this.senderaddress3, // 收件人地址第三个
        receiverName: this.formLabelAlign.receiverName,
        senderName: this.formLabelAlign.sendername,
        receiverPhone: this.formLabelAlign.receiverPhone,
        receiverProvinceId: this.senderaddress, // 收件人地址第一个
        senderCityId: this.recipientaddress2, // 发件人地址第二个
        senderCountyId: this.recipientaddress3, // 发件人地址第三个
        senderPhone: this.formLabelAlign.senderphone,
        senderProvinceId: this.recipientaddress, // 发件人地址第一个
        status: this.formLabelAlign.status

      })
      this.eltableList = res.data.items
      this.elarry.total = +res.data.counts
      this.elarry.page = 1
      this.loading = false
    },
    // 重置表单
    resetForm(formName) {
      this.loading = true
      // this.loadingpagination = true
      this.$refs[formName].resetFields()
      this.formLabelAlign = {}
      this.senderaddress = ''
      this.senderaddress2 = ''
      this.senderaddress3 = ''
      this.recipientaddress = ''
      this.recipientaddress2 = ''
      this.recipientaddress3 = ''
      // this.eltableList = []
      this.elarry.page = 1
      // this.loading = true
      this.getOrderList()
    },
    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      this.elarry.pageSize = newSize
      this.loading = true
      this.getOrderList()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.elarry.page = newPage
      this.loading = true
      this.getOrderList()
    },
    // 点击详情
    handleClick(id) {
      this.$router.push(
        { path: `edit-order/${id}` })
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.cancel {
  color: #2a2929;
  border: 1px solid #d8dde3;
  border-radius: 5px;
  font-weight: 400;
  background-color: #fff;
  padding-left: 35px;
  padding-right: 35px;
  &:hover {
    background: #ffeeeb;
    border: 1px solid #f3917c;
    color: #e15536;
  }
}
.alert {
  margin-top: 25px;
  margin-bottom: 25px;
  margin-right: 20px;
  margin-left: 20px;
background-color: #fff;
  height: 264px;
  position: relative;

}
// ::v-deep .el-button-danger{
//   background-color: #e15536;
//   span{
//     color: #fff;
//   }
// }
.pagination {
  margin-top: 40px;
}

// 下拉框
::v-deep .el-select {
  width: 100%;
}
.order-list ::v-deep .el-table td,
.el-table th {
  padding: 12px 0;
  min-width: 0;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  position: relative;
  text-align: left;
  overflow: hidden;
}
::v-deep .el-table__body{
  overflow-x: auto;
}
::v-deep .el-table_1_column_15.is-leaf .cell{
  text-align: center;
}
// ::v-deep .el-table__body-wrapper::-webkit-scrollbar {
//   // width: 20px; /* 纵向滚动条 */
//   height: 8px; /* 横向滚动条 必写 */
//   }
  /* 设置滚动条样式 */
  // ::v-deep .el-table__body-wrapper::-webkit-scrollbar-thumb {
  // // 设置滚动条哑颜色，根据自己选择设置
  // // background-color: #dde;
  // border-radius: 3px;
  // }
//   ::v-deep .el-table tr td .cell{
//     font-size: 12px;
// }
 ::v-deep .el-table--scrollable-x .el-table__body-wrapper {
    overflow-x: auto;
}
// ::v-deep .cell{
//   span{
//     font-size: 14px;
//   }
// }
</style>

