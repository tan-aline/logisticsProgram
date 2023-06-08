<!-- 车辆详情 -->
<template>
  <div
    class="dashboard-container vehicle-detail"
  >
    <div class="box">
      <!-- 上面 -->
      <div class="top">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1">基本信息</el-menu-item>
          <el-menu-item index="2">行驶证信息</el-menu-item>
        </el-menu>
      </div>
      <!-- 中间 -->
      <div class="center">
        <el-row :gutter="24">
          <el-col :span="8"><div class="grid-content bg-purple">车辆编号：{{ form.id }}</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">车牌号码：{{ form.licensePlate }} </div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">车型名称：{{ form.truckTypeName }} </div></el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8"><div class="grid-content bg-purple">车辆体积： {{ form.allowableVolume }} m³</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">车牌载重： {{ form.allowableLoad }} 吨</div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple">GPSID: {{ form.deviceGpsId }}</div></el-col>
        </el-row>
        <div class="center-top">
          <span>图片信息:</span>  <img src=""></div>

      </div>
      <!-- 下面 -->
      <div class="footer"><el-button class="danger">编辑</el-button></div>
    </div>
  </div>
</template>
<script>
import { getTrucker } from '@/api/vehicle'
export default {
  data() {
    return {
      value: '',
      form: {
        id: '',
        licensePlate: '',
        truckTypeName: '',
        allowableVolume: null,
        allowableLoad: null,
        deviceGpsId: ''
      }
    }
  },
  mounted() {
    this.value = this.$route.query.id
    this.initData(this.value)
  },
  methods: {
    async initData(value) {
      console.log(value)
      const res = await getTrucker(value)
      console.log(res.data)
      this.form.id = res.data.id
      this.form.licensePlate = res.data.licensePlate
      this.form.truckTypeName = res.data.truckTypeName
      this.form.allowableVolume = res.data.allowableVolume
      this.form.allowableLoad = res.data.allowableLoad
      this.form.deviceGpsId = res.data.deviceGpsId
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
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
    height: 80%;
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
