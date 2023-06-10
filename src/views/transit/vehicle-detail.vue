<!-- 车辆详情 -->
<template>
  <div
    class="dashboard-container vehicle-detail"
  >
    <div class="box">
      <el-tabs
        v-model="activeName"
        @tab-click="handleClick"
      >
        <el-tab-pane
          label="基本信息"
          name="first"
        >
          <vehicleInfo></vehicleInfo>
        </el-tab-pane>
        <el-tab-pane
          label="行驶证信息"
          name="second"
        >
          <vehicleDriving></vehicleDriving>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import vehicleInfo from './components/vehicle-info.vue'
import vehicleDriving from './components/vehicle-driving-license.vue'
export default {
  components: {
    vehicleInfo,
    vehicleDriving
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  color: #f14f26;
}
</style>

<style lang="scss" scoped>
.dashboard-container{
  height: 90vh;
  padding: 20px;
  .box {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
  .center {
    width: 100%;
    height: 90%;
    border-bottom: 1px solid #ccc;
    .center-top {
      height: 120px;
      margin-left: 20px;
      display: flex;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
  .footer {
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    .danger {
      background-color: #e15536;
      color: white;
    }
  }
}
.vehicle-detail {
  /deep/ .el-container{
    flex-direction: column;
    margin-left: 0px;

  }
  .in{
    height: calc(100vh - 205px);
    // height: 100%;
  }
  .aside-box {
    background: #ffffff;
    border-radius: 4px;
    // width: 150px;
    padding: 24px 37px 24px 37px;
    box-sizing: border-box;

    // min-height: calc(100vh - 50px);
    /deep/ .el-aside {
      padding-bottom: 14px;
      width: 100%!important;
      display: flex;
      background-color: #ffffff;
      border-bottom:1px solid #E5E7EC ;
      text-align: left;
      font-size: 14px;
      .aside-item {
        // margin-top: 38px;
        cursor: pointer;
        &:first-child {
          margin-right: 53px;
          padding-left: 25px;

        }
      }
      .aside-item.active{
        font-size: 16px;
        font-weight: bold;
        color: #20232A;
        &:after{
          content: '';
          display: block;
          background-color:#E15536 ;
          height: 3px;
          width: 49px;
          margin: 0 auto;
          position: relative;
          top: 14px;
        }
      }
    }
  }
}
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  // .bg-purple {
  //   background: #d3dce6;
  // }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    padding-left: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
