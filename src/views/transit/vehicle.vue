<!-- 车辆列表 -->
<template>
  <div class="dashboard-container vehicle customer-list-box">
    <div class="header">

      <div class="left">
        <span>车辆类型：</span>
        <el-select
          v-model="value"
          class="select"
          placeholder="请选择"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <div class="center">
        车牌号码：<input
          type="text"
          placeholder="请输入车牌号码"
        />
      </div>

      <div class="right">
        <el-button type="danger">搜索</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getDepartment } from '@/api/vehicle'
export default {
  name: 'Vehicle',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  created() {
    this.vehicle()
  },
  methods: {
    async vehicle() {
      const res = await getDepartment()
      console.log(res)
    }
  }
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
  padding: 0 20px;
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
.header {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    width: 40%;
    height: 60px;
    margin-left: 20px;
    span {
      width: 120px;
    }
    .select {
      width: 240px;
      border-radius: 8px;
    }
  }
  .center{
    width: 30%;
    height: 60px;
    input {
      height: 40px;
      border: 1px solid #ccc;
      border-radius: 8px;
    }
  }
  .right{
    width: 30%;
    height: 60px;
  }
}

// 下拉框
/deep/ .el-select {
  width: 100%;
}
</style>

<style>
.startconfirm {
  width: 481px;
}
.startconfirm .el-message-box__header {
  padding-bottom: 4px;
}
.startconfirm .el-message-box__container {
  margin-bottom: 15px;
}
.confirm .el-message-box__status.el-icon-warning {
  left: 70px;
}
.confirm.el-message-box__title {
  font-size: 16px;
}
.confirm .el-message-box__message p {
  color: #f92d2d;
  margin-top: 5px;
}
.confirm .el-message-box__btns {
  text-align: center;
  margin-top: 10px;
}
</style>
