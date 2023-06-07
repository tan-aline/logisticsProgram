<!-- 运费管理 -->
<template>
  <div class="dashboard-container waybill-list customer-list-box">
    <div class="freight">
      <el-button
        class="btn-add"
        size="mini"
        type="primary"
        @click="addPermission1"
      >新增模板</el-button>
      <el-table
        class="el-tables"
        default-expand-all
        :data="list"
        row-key="id"
      >
        <el-table-column
          prop="name"
          label="模板类型"
        />
        <el-table-column
          prop="code"
          label="运送类型"
        />
        <el-table-column
          prop="description"
          label="关联城市"
        />
        <el-table-column
          prop="description"
          label="首重"
        />
        <el-table-column
          prop="description"
          label="续重"
        />
        <el-table-column
          prop="description"
          label="轻抛系重"
        />
        <el-table-column label="操作">
          <template v-slot="{ row }">
            <el-button
              v-if="row.type === 1"
              size="mini"
              type="text"
              @click="addPermission2(row.id)"
            >添加</el-button>
            <el-button
              size="mini"
              type="text"
              @click="editPermission(row.id)"
            >编辑{{ row.id }}</el-button>
            <el-button
              size="mini"
              type="text"
              @click="delPermission(row.id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped rel="stylesheet/scss">
.waybill-list {
  .el-dialog__wrapper {
    /deep/ .el-dialog__body {
      padding-left: 0px;
    }
  }
  .freight {
    width: 1050px;
    height: 460px;
    background-color: #fff;
    margin: 20px;
    // border-radius: 10px;
    .btn-add {
      width: 100px;
      height: 40px;
      background: #e15536;
      border-radius: 4px;
      border-color: transparent;
      margin: 25px;
      font-size: 14px;
    }
    .el-tables{
      margin-left: 25px;

    }
  }
}
</style>
