<!-- 排班管理 -->
<template>
  <div class="dashboard-container transport-task customer-list-box">

  </div>
</template>
<script>
export default {
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
/deep/ th.date{
  .cell{
    padding-left: 17px!important;
  }
}
.work {
  width: 24px;
  height: 24px;
  background: #ffeeeb;
  border: 1px solid #e15536;
  border-radius: 50%;
  text-align: center;
  color: #e15536;
  font-size: 13px;
}
.history-name {
  width: auto !important;
  /deep/ .el-input__inner {
    width: 293px;
  }
}

.workArrange-manage-people-setting {
  /deep/ .el-dialog__body {
    padding: 30px 50px 10px 50px !important;
  }
  /deep/ .el-dialog__footer {
    padding-bottom: 40px;
  }
}

.work-type {
  /deep/ .el-form-item__content {
    margin-left: 40px !important;
  }
  /deep/ .el-radio:first-child {
    margin-right: 80px !important;
  }
  /deep/.el-radio__label {
    font-weight: bold;
    color: #333333;
  }
}

.dialog-footer {
  .el-button {
    width: 89px;
    height: 36px;
    padding: 10px 20px;
  }
}

.rest {
  width: 24px;
  height: 24px;
  background: #eff3f8;
  border: 1px solid #d8dde3;
  border-radius: 50%;
  text-align: center;
  color: #20232a;
  font-size: 13px;
}

.alert {
  margin: 10px 0px;
}
.pagination {
  margin-top: 40px;
}
.transport-task /deep/ .el-table td,
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

// 下拉框
/deep/ .el-select {
  width: 100%;
}

/*定义滚动条轨道 内阴影+圆角*/
/deep/ .el-table--scrollable-x .el-table__body-wrapper {
  padding-bottom: 5px;
  margin-bottom: 5px;
  &::-webkit-scrollbar {
    height: 10px;
  }

  /*定义滑块 内阴影+圆角*/
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(144, 147, 153, 0.3);
  }

  &::-webkit-scrollbar-track-piece {
    margin-right: 3px;
    margin-left: 3px;
  }
}
/deep/ .el-card{
  overflow: initial;
}
</style>

<style></style>
