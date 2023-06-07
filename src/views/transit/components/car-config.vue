<!-- 配置车辆弹窗 -->
<template>
  <div>配置车辆弹窗</div>
</template>

<script>
export default {
  name: 'CarConfig'
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
  .iphone{
    flex: 60%;
  }
  .num,.name{
    margin-bottom: 14px;
  }
  label {
    width: 71px;
    height: 20px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    font-size: 14px;
    color: #20232A;
    letter-spacing: 0.16px;
    text-align: right;
  }
  span {
    color: #818693;
    font-size: 14px;
  }
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
</style>
