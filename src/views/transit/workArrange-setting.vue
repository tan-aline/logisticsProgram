<!-- 排班设置页 -->
<template>
  <div class="dashboard-container waybill-list customer-list-box">
    <div class="app-container">
      <el-card shadow="never">
        <el-button
          type="warning"
          style="margin-bottom: 20px; padding: 9px 0px; width: 120px"
        >添加工作模式</el-button>
        <el-table
          :data="data"
          style="width: 100%; margin-bottom: 30px"
        >
          <el-table-column
            prop="id"
            label="工作模式编号"
          > </el-table-column>
          <el-table-column
            prop="name"
            label="工作模式"
          > </el-table-column>
          <el-table-column
            prop="workPatternTypeDesc"
            label="类型"
          >
          </el-table-column>
          <el-table-column
            prop="workDate"
            label="工作日期"
          > </el-table-column>
          <el-table-column label="工作时间">
            <template v-slot="{ row }">
              {{ row.workEndMinute1 | handleTime(row.workStartMinute1) }}
            </template>
          </el-table-column>
          <el-table-column label="操作"> </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination
            :current-page="paginationData.page"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="paginationData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getWorkPatterns } from '@/api/workArrange'
export default {
  filters: {
    handleTime(val1, val2) {
      return ((val1 - val2) / 60).toFixed(2) + '小时'
    }
  },
  data() {
    return {
      data: [],
      total: 0,
      workTime: [],
      paginationData: {
        page: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      const res = await getWorkPatterns(this.paginationData)
      this.data = res.data.items
      this.total = Number(res.data.counts)
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
/deep/ .table-card-box {
  .el-card__body {
    padding-bottom: 0px;
  }
}
/deep/ .pagination {
  padding-bottom: 30px;
  margin: 20px 0 0 !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px !important;
  color: #20232a !important;
}
.tab-box {
  color: #20232a;
  /deep/ .el-tabs__item.is-active {
    color: #20232a;
    font-size: 16px;
    font-weight: bold;
  }
  /deep/ .el-form-item__content {
    height: 40px;
  }
  /deep/ .el-tabs__item {
    font-size: 14px;
  }
  /deep/ .el-tabs__item:hover {
    color: #20232a;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  /deep/ .el-tabs__active-bar {
    background-color: #e15536;
  }
  /deep/ .tips {
    margin-left: 130px;
    margin-bottom: 14px;
    color: #bac0cd;
  }
  .el-checkbox {
    margin-right: 12px;
  }
  /deep/ .workDay {
    .el-form-item__error {
      position: relative;
    }
  }
}
/deep/ .el-dialog__body {
  padding-top: 30px !important;
  .el-tabs__header {
    padding-bottom: 25px;
  }
}
/deep/ .el-tabs__nav,
.is-top {
  transform: translateX(30px) !important;
}
/deep/ .el-pagination__total {
  font-size: 14px !important;
  color: #20232a !important;
  margin-right: 35px !important;
}
/deep/ .el-pagination__sizes {
  margin: 0 28px 0 0 !important;
}
/deep/ .el-pager li.active {
  color: #e15536;
}
/deep/ .el-pagination__jump {
  font-size: 14px !important;
  color: #20232a !important;
  margin-left: 28px !important;
}
/deep/ .el-pagination__editor.el-input {
  width: 66px !important;
}
/deep/ .el-pagination__editor {
  padding: 0 7px;
}
</style>
