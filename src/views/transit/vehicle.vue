<!-- 车辆列表 -->
<template>
  <div class="dashboard-container vehicle customer-list-box">

  </div>
</template>
<script>
export default {
  name: 'Vehicle'

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

// 下拉框
/deep/ .el-select {
  width: 100%;
}
</style>

<style>
  .startconfirm{
    width: 481px;

    }
    .startconfirm .el-message-box__header{
      padding-bottom: 4px;
    }
    .startconfirm .el-message-box__container{
      margin-bottom: 15px;
    }
    .confirm .el-message-box__status.el-icon-warning{
      left: 70px;
    }
    .confirm.el-message-box__title{
      font-size: 16px;
    }
    .confirm .el-message-box__message p {
      color: #F92D2D;
      margin-top: 5px;
    }
    .confirm .el-message-box__btns{
      text-align: center;
      margin-top: 10px;
    }
</style>
