<!-- 订单管理 -->
<template>
  <div class="dashboard-container order-list customer-list-box">
    订单管理
  </div>
</template>
<script>
export default {

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px;
}
.pagination {
  margin-top: 40px;
}

// 下拉框
/deep/ .el-select {
  width: 100%;
}
</style>

<style lang="scss" scoped>
.order-list /deep/ .el-table td,
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
</style>
