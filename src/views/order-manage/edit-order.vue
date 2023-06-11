<!-- 订单详情 -->
<template>
  <div
    class="dashboard-container edit-order"
    style="margin: 20px;
      "
  >
    <div v-if="isShow">
      <header
        style="height: 110px;
        "
      >
        <el-row style="margin-left: 40px;">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <p>
                <span>订单编号：
                  <em style="margin-left: 27px;">
                    {{ orderList.id }}</em></span>
                <span>运单编号： <em>{{ orderList.transportOrder? orderList.transportOrder.id:'- -' }}</em></span>
                <span>下单时间：
                  <em>{{ orderList.createTime }}</em></span>
                <span>订单状态：
                  <em>{{ orderList.status===22000? '已关闭': orderList.status===23000? '待取件': orderList.status===23001? '已取件':
                    orderList.status===23002? '网点自寄':orderList.status===23003? '网点入库':
                      orderList.status===23004? '待装车':orderList.status===23005? '运输中':
                        orderList.status===23006? '网点入库':orderList.status===23007? '待派送':
                          orderList.status===23008? '派送中':orderList.status===23009? '已签收':
                            orderList.status===23010? '拒收':'已取消'
                  }}</em></span>
              </p>
              <p>预计到达日期： <em>{{ orderList.estimatedArrivalTime }}</em></p>
            </div>
          </el-col>
        </el-row>
      </header>
      <main>
        <div class="main-warp">
          <el-collapse v-model="activeNames">
            <el-collapse-item
              title="基本信息"
              name="1"
            >
              <div
                style="margin-top: 40px;"
                class="main-warpone"
              >
                <img
                  style="
                      width: 14px;
                      height: 18px;
                      vertical-align: middle;
                      margin-right: 8px;
                  "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAkCAYAAACaJFpUAAAERUlEQVRYR62WW4xTVRSG/3/PTRiJ085wyTgwbWPCJYoYExPj5c1bfPICGtuSKJeIaMQHRRL1QUkQfRCjiAGCCe0xCl6eNBrevMTExIhouCSm7QzjhIGZtgQHZKbdv+kpMzIzPaft2PPQh57/X99e+6y19yKqPAvjmfC48JCg+wD0AuouWzgIoI/gty3El0OJULpaLNflJeqMZ5Zb2bclPFhTIOIrQ/PiSCJ0wk8/AyiJnbG+1y20DVBTLbD/NCwacMdIsvc1kqrknQLseeH0nL/PjR+E8Gh9oGlq4rNr57esHXhn8aXpcaYAA7HUIQmr/xfsipnE4VwyssYTGIimXxa0oxGwiRgEt+Wc8JtXx3QzLFXiZWtPAmhtJBDAWJsxy66uYBcYiGYOCjbeYFi5eWASOSe0djLrBeuHFo79c3EQkqkJSI64OqmzRr1tvWZu99n9C4fcBQTjmXXW2v3VzCS/aYK2DCcjp0rarlhqaRHcJen+al4Dsy7rhA64wI5o+nNAD/s3Kz/NOeHHK2kC0fQngh7zh/KLvBN+xAUGYqnfJKz0MpAcnTO3LTS4t3u4kqZ742DXpYuXM5LavWPgWC4ZubmcYSx1FsJ8H/H3uWTkbr8MArHUdxLu8tQQ5/LJyIIJ4BiEFk8g+HHOCUd9gdG0I+gJH+B4PhlxW44d0dSZUit6A/F7zol4bnm5rVLHBNzks6ihvBNZNFE0vwJa5b062ibTfPvIwcU/V9J0rj19W9EWfvJvKx7NO+FbykUTTe8R9LRvlZLHm1qb7hk+sKR0B04+XU/1dxfHikckrahS5R/mnPAmFxiMp1Zbi0PVeglglgY7YcyPrtbaO2SxFVCwmtcYrMkmIodd4A3PqW04mx4o9XI14yzfD3cFwz1/vsfLLrD0E4xm3rCwr8wyoK/NwGzPOqFXJ0RXbosz7WO6eFzCkkZCSfS3cu6KocSi0SnAcpapey34df1jhWdDFQ3NA9lk75GrFVNv/GjmGcHubkSWhNmcc0IfTI81Y4gKxjLrreweAM2zBBcMzaZsMlTxBqo4JgbifXdCdq+k5fVASZ4AzcZcovcHz432enHrRrWkRvs2gHaThBv9Dwb8AZk9kfbefb/s5bj/IVBDCoF4ZrOsfb+SlMY8m0uEav7unpP39OAdsfTzkHZN+Z/ckk+G361hzZOSmoElRyCefklWO90Tw3BrLhF+qx7Y5ElTj6kjnnJPpHwisr0e34zGn415Np66tnQ2AM/Gd6dvaiWFpbBaIrKbUBfATkjzBLYTmCOqGWL5UKAKFAsCLhEaBXkB0IjAYUqDMOwXcapNPDYxfbNUCJA2N/rgnpEZ0Q9ydwm4TcIGSOFGbJlnDDJNYt/kNww++ddiFQqroOIyij0W6CG1AMJ1IK6TOI9Eq6BmgFemPI0TLEgYI3UBwnkQ5yWeNcCAqAGw6SSbm49mP7r+dGkx/wJgKKe9yx0PswAAAABJRU5ErkJggg=="
                >
                <span
                  style="
                  font-size: 14px;"
                >发货方</span>
                <p>
                  <span>发货方姓名：<em>{{ orderList.senderName }}</em></span>
                  <span>发货方电话：<em>{{ orderList.senderPhone }}</em></span>
                </p>
                <p>
                  <span>发货方地址：<em>{{
                    orderList.senderProvince.name+
                      orderList.senderCity.name+
                      orderList.senderCounty.name
                  }}</em></span>
                  <span>详细地址：<em>{{ orderList.senderAddress }}</em></span>
                </p>
              </div>
              <div
                style="margin-top: 20px;"
                class="main-warpone"
              >
                <img
                  style="
                      width: 17px;
                      height: 17px;
                      margin-right: 8px;
                      vertical-align: middle;
                      margin-bottom: 4px;
                  "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAEBElEQVRYR82Ya4iUZRTHf69ZrrYbeA3LUFPxgpet0C4YNeMlBVkV/aDijQiRKBARIwJF+5gfLCqRoCgh8oOoGwii7qgoeN9ZNTQv5Iql0A2czUuWb/yX8wzPPjsz+06zhQeWnXnfc87zf8/lf847EZXLAeAi8EYlrqJKjIGuwD3gB+DpSnxVCuQR4C5wBRj8fwJ5GJgGzAHGAsOBHgbgJnAOOAVsBQ4CcVJwSSOiJ18BrAZ6J3R+FVgLfJkEUBIgLwFfAUMCAKqNn+xPtfIE0B/oEuidABZYQRd9ho6ALAI+A7qZB4V6O/A1sBtoCTwrWjOAJUDKu/c7MBdoKIakFJCFwBbP8CjwFqAnTCKvAR8DQ035T2AScKiQcTEgLwIZLxJfAMsBOStHelrhTjGjX4AJ1u5t/BQCosI8CwwzTRXb0nJOD3TVaXuAV+y6Pk8N/RUCsgr4wBSPAy8bV+Rtz9fV1dzJ5aRX54X+ElBfVVOzYUR9fS44qI+19VN2faZ0fZ0QiKr/R6CfKb0AqDby0pROp+/D58TxwIJRiqLmLvD6uIaGsDD9mjsCKP15CYFMB3bZXSEW8jYg4jjeG0PJbosgjqJocgBGNkr5KHOoIr7snIcO1apueM0HvnGKSsftlpYzRSPRLulRc/fq6jFBmtYA60xV5OhKoN2TKWTPA/cBVbxou1WyqdS6GOQosUSwvjaTEbs6eRY4aV9EDYv9iIgJa+yCaPkx4IaxZN5DYzqdJY7HJUZBa/6ytZnMM56NznEPp5mUtns5peYYMD44oBEQ+rxkU6lcDNVlAmmpzWTcQzpTsfGjgZ/jArLRQzbGFL4DRv8HQHTeHUBcJXL83s5oCItVKXkc+C2cstlUqjGG2jIjEqZGfPKz+dCa4EiuXbGK1l81RZHPNXdwJxWramKf+dxsY6P1axgRtZMYU6IB94kD0knt+xHwtvlcZpO9IJDnvOmqNlMR57cssWoFhKYCFYEp9dpltLv86rdvmHYVqmO/eTY98zoVULxPZjuA2f7Bhah6li0/0tMGpqjof17c0IujaGYUx25zKzX0VOSHbb/926jhdEdAdH+vLTH6rAmsbeuPcjrG09UKKcZ2k3cT8Gboq9jwkrGI7kkzaLIB2FwmGJHiTmCA2YkoJwK3kgKRnpzs9+hf3PI+8GmCTU1j4h1gJVBlh4oKtFZozWgnHS3PYtdvgUGepRxts+sXgOvAQ7bFS1+rg+qsl2ejDtQS1abWktSIr9MX+BDQWlBI1N7FHugv46J3gdul0tpRRHxbbVTvAdrOtcmVEtWAWlSpPJ+krsoB4vxpXij8euUcCWhD1wDTUuxeOZXO8J2nJJ5/A8R3+MD8GvDAAFF0OuWHmn8AhAQVjmKpeZ0AAAAASUVORK5CYII="
                >
                <span
                  style="
                  font-size: 14px;"
                >收货方</span>
                <p>
                  <span>收货方姓名：<em>{{ orderList.receiverName }}</em></span>
                  <span>收货方电话：<em>{{ orderList.receiverPhone }}</em></span>
                </p>
                <p>
                  <span>收货方地址：<em>{{
                    orderList.receiverProvince.name+
                      orderList.receiverCity.name+
                      orderList.receiverCounty.name
                  }}</em></span>
                  <span>详细地址：<em>{{ orderList.receiverAddress }}</em></span>
                </p>
              </div>
              <div
                style="margin-top: 15px;"
                class="main-warpone"
              >
                <img
                  style="
                      margin-right: 8px;
                      width: 15px;
                      height: 18px;
                      vertical-align: middle;
                      margin-top: 2px;
                  "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAkCAYAAACe0YppAAABIElEQVRYR+3XMUoDURQF0HtHcTmuYQKCwmQmha0L0NJSlKAEJb3iFoS0qSxs3IOIiEJURNuUOr4rf0JwEMUm81L4ZwFzeJf7/udTw+QYwCaARfh8JYBTapi8O6LT0cYBls+gNYXY9oeFHRbW94WFPRZ2GGb3g4ku29abBu4FHzC3/XqXPOAec+t+L3CzsHDEwnZ/2pom4TESW2aGkTcMQPdYUspVPPpGXWm6w5tSruPJu1wBv4UpZQfP3usU8BskSpnhxfcAmcR+DVOLHbw22epf7h5dYUGtOcDVQX05Hxh4+IKJEYSBw91corRBbWJdMNeKA1wREY5RN9a1WK5YrliumSXwP9dp8jCnztnW2syy/ONHIeoTEBsgt5h9nHnBn0VX0+YFCmyDAAAAAElFTkSuQmCC"
                >
                <span
                  style="
                  font-size: 14px;"
                >距离：{{ orderList.distance }}km</span>
                <p>
                  <span>备注：暂无</span>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div
          v-if="orderList.transportOrder"
          class="dingdan"
        >
          <el-collapse
            v-model="dingdan"
          >
            <el-collapse-item
              title="订单跟踪"
              name="1"
            >
              <div
                style="height: 20px;"
                class="main-waprdingdan"
              >
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div
          v-if="orderList.transportOrder"
          class="dingdan"
        >
          <el-collapse
            v-model="dingdanguiji"
          >
            <el-collapse-item
              title="订单轨迹"
              name="1"
            >
              <div
                style="margin: 20px;
                  position: relative;
                  height: 700px;"
                class="main-waprdingdanguiji"
              >
                <baidu-map
                  style="height: 700px;
                  width: 100%;"
                  class="map"
                  :center="center"
                  :zoom="zoom"
                  :map-name="mapName"
                  :scroll-wheel-zoom="true"
                  @ready="handler"
                >
                  <!-- bm-marker 就是标注点 定位在point的经纬度上 跳动的动画 -->
                  <bm-marker
                    :position="point"
                    animation="BMAP_ANIMATION_BOUNCE"
                  >
                    <bm-info-window
                      :show="false"
                      style="width: 30px !important;
                      position: relative !important;
                      border-radius: 10px !important;"
                    >

                    </bm-info-window>
                  </bm-marker>

                </baidu-map>
                <p
                  p
                  class="cont"
                >
                  <span>目的地</span>
                  <span>{{ orderList.senderCity.name }}</span>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div
          v-if="orderList.taskPickup"
          class="actor"
        >
          <el-collapse v-model="activeNames2">
            <el-collapse-item
              title="取件信息"
              name="1"
            >
              <div class="main-waprtwo">
                <p>
                  <span>所在网点：<em>{{ orderList.taskPickup.agency.name }}</em></span>
                  <span>取件类型：<em>
                    {{
                      orderList.pickupType === 1? '网点自寄':'上门取件'
                    }}
                  </em></span>
                  <span>作业状态：<em>
                    <!-- status任务状态，1为新任务、2为已完成、3为已取消-->
                    {{
                      orderList.taskPickup.status === 1? '新任务':
                      orderList.taskPickup.status === 2? '已完成':'已取消'
                    }}
                  </em></span>
                  <span>取件快递员：<em>
                    {{
                      orderList.taskPickup.courier.name
                    }}
                  </em></span>
                </p>
                <p>
                  <span>快递员电话：<em>
                    {{
                      orderList.taskPickup.courier.mobile
                    }}
                  </em></span>
                  <span>预计取件时间：<em>
                    {{
                      orderList.taskPickup.estimatedStartTime
                    }}
                  </em></span>
                  <span>取件完成时间：<em>
                    {{
                      orderList.taskPickup.actualEndTime
                    }}
                  </em></span>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div
          v-if="orderList.taskDispatch"
          class="actor"
        >
          <el-collapse v-model="paisong">
            <el-collapse-item
              title="派送信息"
              name="1"
            >
              <div class="main-waprfive">
                <p>
                  <span>所在网点：<em>{{ orderList.taskDispatch.agency.name }}</em></span>
                  <span>作业状态：<em>
                    <!-- status任务状态，1为新任务、2为已完成、3为已取消-->
                    {{
                      orderList.taskDispatch.status === 1? '新任务':
                      orderList.taskDispatch.status === 2? '已完成':'已取消'
                    }}
                  </em></span>
                  <span>取件快递员：<em>
                    {{
                      orderList.taskDispatch.courier.name
                    }}
                  </em></span>
                  <span>快递员电话：<em>
                    {{
                      orderList.taskDispatch.courier.mobile
                    }}
                  </em></span>
                </p>
                <p>

                  <span>预计取件时间：<em>
                    {{
                      orderList.taskDispatch.estimatedStartTime
                    }}
                  </em></span>
                  <span>取件完成时间：<em>
                    {{
                      orderList.taskDispatch.actualEndTime
                    }}
                  </em></span>
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div
          v-if="orderList.amount"
          class="money"
        >
          <el-collapse v-model="activeNames3">
            <el-collapse-item
              title="费用信息"
              name="1"
            >
              <div class="main-waprthree">
                <p>
                  <span>运费：<em style="font-size: 18px;color: #ffc338;">
                    {{ orderList.amount }}
                  </em> 元</span>
                  <span>支付方式：<em>
                    <!-- 付款方式,1.预结2到付 -->
                    {{
                      orderList.paymentMethod === 1? '预结':'到付'
                    }}
                  </em></span>
                  <span>付款状态：<em>
                    <!-- 付款状态,1.未付2已付 -->
                    {{
                      orderList.paymentStatus === 1? '未付':'已付'
                    }}
                  </em></span>

                </p>
              </div>

            </el-collapse-item></el-collapse>
        </div>
      </main>

      <footer>
        <el-collapse v-model="activeNames4">
          <el-collapse-item
            title="货品信息"
            name="1"
          >
            <div class="main-waprfour">
              <el-button
                v-if="orderList.orderCargoDTOS.length"
                style="margin-left: 30px;
                margin-top: 20px;"
                type="danger"
                @click="addtable"
              >+新增
              </el-button>
              <el-table
                :data="tableList"
                stripe
                show-summary
                style="width: 100%;margin: 20px;"
              >
                <el-table-column
                  prop="date"
                  type="index"
                  label="序号"
                  width="70"
                >
                </el-table-column>
                <el-table-column
                  prop="name.toString()"
                  label="货品名称"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-if="scope.row.isEdit"
                      v-model="scope.row.name"
                      clearable
                      size="mini"
                    />
                    <span v-else>
                      {{ scope.row.name.toString() }}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="goodsType.name"
                  label="货品类型"
                >
                  <template slot-scope="scope">
                    <el-select
                      v-if="scope.row.isEdit"
                      v-model="scope.row.goodsType.name"
                      clearable
                      size="mini"
                    >
                      <el-option
                        v-for="item in orderOptions"
                        :key="item.id"
                        :label="item.name"
                        :value="item.name"
                      >
                      </el-option>
                    </el-select>
                    <span v-else>
                      {{ scope.row.goodsType.name }}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="totalWeight"
                  label="重量（千克）"
                >
                  <template slot-scope="scope">
                    <el-input
                      v-if="scope.row.isEdit"
                      v-model="scope.row.totalWeight"
                      clearable
                      size="mini"
                    />
                    <span v-else>
                      {{ scope.row.totalWeight }}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="totalVolume"
                  label="体积（立方）"
                ><template slot-scope="scope">
                  <el-input
                    v-if="scope.row.isEdit"
                    v-model="scope.row.totalVolume"
                    clearable
                    size="mini"
                  />
                  <span v-else>
                    {{ scope.row.totalVolume }}
                  </span>
                </template>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="操作"
                  width="150"
                >
                  <template slot-scope="scope">
                    <div v-if="scope.row.isEdit">
                      <el-button
                        type="text"
                        size="mini"
                        @click="handleConfirm(scope)"
                      >确定</el-button>
                      <el-divider direction="vertical"></el-divider>
                      <el-button
                        type="text"
                        size="mini"
                        @click="scope.row.isEdit = false;isOpen=true"
                      >取消</el-button>
                    </div>
                    <el-button
                      v-if="!scope.row.isEdit"
                      type="text"
                      size="small"
                      @click="handleClick(scope.row)"
                    >编辑</el-button>
                    <el-divider
                      v-if="!scope.row.isEdit"
                      direction="vertical"
                    ></el-divider>
                    <el-button
                      v-if="!scope.row.isEdit"
                      style="color: #f56c6c;"
                      type="text"
                      size="small"
                      @click="orderOpen(scope.row.id)"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-collapse-item></el-collapse>
      </footer>
      <el-button
        v-if="orderList.orderCargoDTOS.length"
        style="
          margin-left: 50%;
          margin-bottom: 40px;
          transform: translateX(-50%);
          "
        type="danger"
        @click="save"
      >保存</el-button>
    </div>
  </div>
</template>
<script>
// 根据地址名称获取经纬度坐标
function getPointByAddress(address) {
  // 创建地理编码实例
  // eslint-disable-next-line no-undef
  const myGeo = new BMap.Geocoder()

  return new Promise((resolve, reject) => {
    // 对地址进行地理编码
    myGeo.getPoint(address, (point) => {
      if (point) {
        // 地理编码成功，返回经纬度坐标对象
        resolve(point)
      } else {
        // 地理编码失败
        reject('地理编码失败')
      }
    }, '全国')
  })
}

import { orderDetail, getOrderTrackApi, getSlectList,
  putTable, delTable, updateOrder } from '@/api/order'
export default {
  data() {
    return {
      inside: 0,
      outsiade: 1,
      activeNames: ['1'],
      activeNames2: ['1'],
      activeNames3: ['1'],
      activeNames4: ['1'],
      dingdan: ['1'],
      dingdanguiji: ['1'],
      paisong: ['1'],
      datalist: [],
      orderList: {},
      tableList: [],
      isShow: false,
      // 地图
      center: { lng: 116.3, lat: 39.9 },
      point: '',
      // point: { lng: 116.3, lat: 39.9 },
      zoom: 18,
      mapName: '',
      // 下拉框
      orderOptions: [],
      // 下拉框
      yLis: [],
      // 设置开启
      isOpen: true
    }
  },
  created() {
    this.getorderlist()
    this.getguiji()
    this.$nextTick(() => {
      console.log(this.$refs['bianji'])
    })
  },
  methods: {

    async getorderlist() {
      try {
        if (this.$route.params.id) {
          const res = await orderDetail(this.$route.params.id)

          res.data.orderCargoDTOS.forEach(item => {
            // if (!item.isEdit) {
            item.isEdit = false
            // }
          })
          this.orderList = { ...this.orderList, ...res.data }
          // this.orderList = res.data
          // 表格数据
          this.tableList = res.data.orderCargoDTOS
          this.isShow = true
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 订单轨迹
    async getguiji() {
      if (this.$route.params.id) {
        await getOrderTrackApi(this.$route.params.id)
      }
    },
    // 地图
    async handler ({ BMap, map }) {
      // this.point.lng = this.orderList.receiverCounty.lng
      // this.point.lat = this.orderList.receiverCounty.lat
      this.mapName = '待揽件'
      this.center = this.orderList.receiverProvince.name +
this.orderList.receiverCity.name +
this.orderList.receiverCounty.name +
this.orderList.receiverAddress
      // this.point = '四川成都青羊青羊总部基地'
      const point = await getPointByAddress(this.center)
      this.point = point
      console.log(this.point)
    },
    // 编辑
    async handleClick(row) {
      // this.isOpen = row.isEdit
      if (this.isOpen) {
        const res = await getSlectList()
        this.orderOptions = res.data
        row.isEdit = true
        this.isOpen = false
      } else if (!this.isOpen) {
        this.$message({
          showClose: true,
          message: '请先保存数据',
          type: 'warning'
        })
      }
    },
    // 点击确定
    async handleConfirm(scope) {
      const id = scope.row.id
      const index = scope.$index
      await putTable(id, this.tableList[index])
      scope.row.isEdit = false
      // console.log(this.tableList)
      this.isOpen = false
      // const list =
      // await postTable(this.tableList[index])
      // console.log(list)
    },
    // 新增--没找到请求是假的
    async addtable() {
      const res = await getSlectList()
      this.orderOptions = res.data
      const arr = {
        cargoBarcode: '',
        cargoValue: 0,
        goodsType: {
          defaultVolume: null,
          defaultWeight: null,
          id: '1552846618315661323',
          name: '运动',
          remark: null,
          status: 1,
          truckTypes: null

        },
        id: '1667007583717249026',
        name: '',
        quantity: null,
        remark: '',
        totalVolume: null,
        totalWeight: null,
        unit: '',
        volume: 0,
        weight: 0

      }
      this.inside = this.tableList.length
      this.outside = this.tableList.length
      arr.id = this.inside
      arr.goodsType.id = this.outsiade
      arr.isEdit = true
      this.tableList.push(arr)
    },
    // 点击删除
    orderOpen(id) {
      this.$confirm('确定要删除货品吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async() => {
        await delTable(id)
        // 真正的删除刷新
        // if (this.$route.params.id) {
        //   const res = await orderDetail(this.$route.params.id)
        //   this.tableList = res.data.orderCargoDTOS
        // }
        // 新增--没找到请求是假的 所以这里是假的
        this.tableList.splice(id, 1)
        // console.log(this.tableList)
        // this.handleClick()
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 点击保存orderCargoDTOS
    async save() {
      const res = await
      updateOrder(this.$route.params.id, this.orderList)
      // this.tableList = res.data.orderCargoDTOS
      // console.log(res.orderCargoDTOS)
      console.log(this.orderList, res)
      this.getorderlist()
    }
  }
}
</script>
  <style lang="scss" scoped>

  .cont{
    margin-left: 10px;
    position: absolute;top: 0;
    display: flex;
    background-color: #f6eeec;
    border-radius: 20px;
    span{
      display: block;
      width: 54px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      color: #20232a;
    }
  }
  .cont span:nth-child(1){
    border-radius: 20px 0 0 20px;
    background-color: #fff;
  }
  header{
    background-color: #fff;
    p {
      display: flex;
      font-size: 14px;
      margin-top: 25px;
      span{
        width: 420px;
      }

    }
  }
  em{
        font-style: normal;
        color: #6d7294;
      }
  main{
    margin-top: 20px;
    background-color: #f3f4f7;

  }
  .actor,.money,footer{
    margin-top: 20px;
    background-color: #fff;

  }
  .main-warpone{
      margin-left: 40px;
      p{
        text-indent: 45px;
      }
    }
    .main-warpone p:nth-child(3){
      span:nth-child(2){
        margin-left: 260px;
      }
    }
    .main-warpone p:nth-child(4){
      span:nth-child(2){
        margin-left: 235px;
      }
    }
    .main-waprtwo p{
      margin-left: 45px;
      margin-top: 35px;
      min-width: 90%;
    }
    .main-waprtwo p{
      display: flex;
      span{
        width: 355px;
      }
    // }
    // .main-waprtwo p:nth-child(2){
    //   display: flex;
    //   span{
    //     width: 355px;

    //   }
    }
    // 派送信息
    .main-waprfive p{
      margin-left: 45px;
      margin-top: 35px;
      min-width: 90%;
      display: flex;
      span{
        width: 355px;
      }
    }
  .main-waprthree p{
    margin-left: 40px;
    margin-top: 40px;
    display: flex;
    span{
      width: 550px;
    }
  }
  footer{
    margin-bottom: 20px;
  }
  ::v-deep .has-gutter tr th:nth-last-child(2) .cell{
    text-align: center;
  }
  </style>
  <style rel="stylesheet/scss" lang="scss" scoped>
  @import './index.scss';
  </style>

