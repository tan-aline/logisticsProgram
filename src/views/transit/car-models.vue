<!-- 车型管理 -->
<template>
  <div class="dashboard-container car-models customer-list-box">

  </div>
</template>
<script>
export default {

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.add-btn{
  margin-bottom: 20px;
}
.alert {
  margin: 10px 0px;
}
.pagination {
  margin-top: 40px;
  padding-bottom: 0px;
}

.el-select {
  width: 100%;
}

.car-models /deep/ .el-table td,
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
.car-models {
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
    padding: 40px 60px 0 30px;
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
</style>
