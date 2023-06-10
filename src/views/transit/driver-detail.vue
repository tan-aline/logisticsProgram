<!-- 司机详情 -->
<template>
  <div class="dashboard-container driver-detail">
    <div class="driver-detail-menu">
      <div class="aside-box ">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">基本信息</el-menu-item>
          <el-menu-item index="2">驾驶证信息</el-menu-item>
        </el-menu>
      </div>
      <driverInfo v-show="activeIndex==='1'" />
      <driverLicense v-show="activeIndex==='2'" />
    </div>
  </div>
</template>
<script>
import driverInfo from './components/driver-info'
import driverLicense from './components/driver-license'
export default {
  components: { driverInfo, driverLicense },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  color: #ff643d;
}
</style>

<style lang="scss" scoped>
.driver-detail {
    /deep/ .el-container{
    flex-direction: column;
    margin-left: 0px;
  }
  .driver-detail-menu{
    margin: 20px;
  }
  .in{
    height: calc(100vh - 205px);
  }
  .aside-box {
    background: #ffffff;
    border-radius: 4px;
    padding: 14px 37px 24px 37px;
    box-sizing: border-box;
    /deep/ .el-menu-item{
      font-weight: 350;
      color:black;
      font-size: 16px;
    }
    /deep/ .el-menu-item.is-active{
      border-color: transparent;
      font-weight: bold;
    }
    /deep/ .el-menu-item.is-active::after{
      content: "";
    display: block;
    background-color: #e15536;
    height: 3px;
    width: 49px;
    margin: 0 auto;
    position: relative;
    top: -3px;
    }
    // /deep/ .el-aside {
    //   padding-bottom: 14px;
    //   width: 100%!important;
    //   display: flex;
    //   background-color: #ffffff;
    //   border-bottom:1px solid #E5E7EC ;
    //   text-align: left;
    //   font-size: 14px;
    //   .aside-item {
    //     cursor: pointer;
    //     &:first-child {
    //       margin-right: 53px;
    //       padding-left: 25px;

    //     }
    //   }
    //   .aside-item.active{
    //     font-size: 16px;
    //     font-weight: bold;
    //     color: #20232A;
    //     &:after{
    //       content: '';
    //       display: block;
    //       background-color:#E15536 ;
    //       height: 3px;
    //       width: 49px;
    //       margin: 0 auto;
    //       position: relative;
    //       top: 14px;
    //     }
    //   }
    // }
  }
}
</style>
