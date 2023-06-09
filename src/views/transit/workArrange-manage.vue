<!-- 排班管理 -->
<template>
  <div class="dashboard-container transport-task customer-list-box">
    <div class="app-container">
      <el-card
        class="box-card"
        shadow="never"
      >
        <el-form>
          <el-row style="margin-left: -30px; margin-right: -30px">
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-form-item
                style="margin-bottom: 20px"
                label-width="80px"
                prop="employeeAccount"
              >
                <template slot="label">
                  <div class="el-form-item_label">员工账号：</div>
                </template>
                <el-input
                  v-model="searchData.employeeNumber"
                  :disabled="loading ? true : false"
                  :clearable="true"
                  placeholder="请输入员工账号"
                  type="text"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-form-item
                style="margin-bottom: 20px"
                label-width="80px"
                prop="employee"
              >
                <template slot="label">
                  <div class="el-form-item_label">员工姓名：</div>
                </template>
                <el-input
                  v-model="searchData.name"
                  :clearable="true"
                  :disabled="loading ? true : false"
                  placeholder="请输入员工姓名"
                  type="text"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-form-item
                style="margin-bottom: 20px"
                label-width="80px"
                prop="workingMode"
              >
                <template slot="label">
                  <div class="el-form-item_label">工作模式：</div>
                </template>
                <el-select
                  v-model="searchData.workPatternId"
                  :disabled="loading ? true : false"
                  placeholder="请选择工作模式"
                >
                  <el-option
                    v-for="item in WorkPatternsList"
                    :key="`${item.id}bbb`"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                  <el-option
                    :label="'暂无排班'"
                    :value="0"
                  > </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-form-item
                style="margin-bottom: 20px"
                label-width="80px"
                prop="month"
              >
                <template slot="label">
                  <div class="el-form-item_label">月份：</div>
                </template>
                <el-date-picker
                  v-model="searchData.month"
                  :disabled="loading ? true : false"
                  format="yyyy-MM"
                  value-format="yyyy-MM"
                  type="month"
                  placeholder="请选择月份"
                  @change="getDate"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-form-item
                style="margin-bottom: 20px"
                label-width="80px"
                prop="organization"
              >
                <template slot="label">
                  <div class="el-form-item_label">所属机构：</div>
                </template>
                <treeselect
                  v-model="searchData.agencyId"
                  :disabled="loading ? true : false"
                  :options="BusinessHallList"
                  placeholder="请选择所属机构"
                  :normalizer="normalizer"
                />
              </el-form-item>
            </el-col>
            <el-col
              :span="8"
              style="padding-left: 30px; padding-right: 30px"
            >
              <el-button
                type="warning"
                class="search-button"
                @click="searchSomeone"
              >搜索</el-button>
              <el-button
                class="reset-btn"
                plain
                :disabled="loading ? true : false"
                @click="resetAll"
              >重置</el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-card>
      <el-card
        v-loading="loading"
        element-loading-text="加载中"
        shadow="never"
        style="padding: 28px"
      >
        <el-button
          type="warning"
          style="margin-bottom: 20px"
          @click="jumpTo"
        >排班设置</el-button>
        <el-button
          plain
          type="warning"
          style="margin-bottom: 20px"
          @click="forWork"
        >绑定排班</el-button>
        <el-table
          ref="multipleTable"
          :data="tableData"
          header-align="center"
          @selection-change="choiceChecked"
        >
          <el-table-column
            type="selection"
            width="55"
          > </el-table-column>
          <el-table-column
            prop="employeeNumber"
            label="员工账号"
            fixed="left"
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="员工姓名"
            fixed="left"
            width="110"
          >
          </el-table-column>
          <el-table-column
            prop="phone"
            label="员工电话"
            fixed="left"
            width="110"
          >
          </el-table-column>
          <el-table-column
            label="员工角色"
            fixed="left"
            :width="tableData.length !== 0 ? 110 : ''"
          >
            <template v-slot="{ row }">
              {{ row.userType | distinguish }}
            </template>
          </el-table-column>
          <el-table-column
            prop="workPatternName"
            label="当前工作模式"
            fixed="left"
            width="120"
          >
          </el-table-column>
          <template v-if="tableData.length !== 0">
            <el-table-column
              v-for="i in 30"
              :key="i + '_a'"
              :label="String(i)"
            >
              <template v-slot="{ row }">
                <div
                  v-if="row.workSchedules[i - 1] === false"
                  class="rest"
                >
                  休
                </div>
                <div
                  v-else
                  class="work"
                >上</div>
              </template>
            </el-table-column>
          </template>
          <div slot="empty">
            <el-empty
              :image="imgUrl"
              :image-size="330"
              description="没有找到您要的内容哦~"
            ></el-empty>
          </div>
        </el-table>
        <div
          v-if="tableData.length !== 0"
          class="pagination"
        >
          <el-pagination
            :current-page="searchData.page"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="searchData.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </el-card>
      <el-dialog
        title="人工调整"
        :visible.sync="dialogFormVisible"
        width="550px"
        :before-close="handleCloseDialog"
        :append-to-body="true"
      >
        <el-form>
          <el-form-item>
            <div style="margin-left: 120px">
              <el-radio
                v-model="showSelect"
                label="1"
                class="raidobox"
                @input="changeRadio"
              >礼拜制</el-radio>
              <el-radio
                v-model="showSelect"
                label="2"
                class="raidobox"
                @input="changeRadio"
              >连续制</el-radio>
            </div>
          </el-form-item>
          <el-form-item
            label="模式名称:"
            label-width="130px"
          >
            <el-select
              v-if="showSelect === '1'"
              v-model="workForID"
              style="width: 280px"
              placeholder="请选择"
            >
              <el-option
                v-for="item in liturgicalSystem"
                :key="`${item.id}ddd`"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-select
              v-else
              v-model="workForID"
              style="width: 280px"
              placeholder="请选择"
            >
              <el-option
                v-for="item in continuousSystem"
                :key="`${item.id}eee`"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button
            type="warning"
            size="mini"
            @click="handleEnter"
          >确 定</el-button>
          <el-button
            plain
            size="mini"
            @click="handleCloseDialog"
          >取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {
  getWorkArrangeList,
  getWorkPatternsList,
  getBusinessHallList,
  editWorkSchedulings
} from '@/api/workArrange'
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
export default {
  components: { Treeselect },
  filters: {
    distinguish(val) {
      if (val === 1) {
        return '员工'
      } else if (val === 2) {
        return '快递员'
      } else {
        return '司机'
      }
    }
  },
  data() {
    return {
      imgUrl: require('@/assets/icon-empty.png'),
      searchData: {
        page: 1,
        pageSize: 10,
        workPatternId: '',
        name: '',
        employeeNumber: '',
        agencyId: null,
        month: ''
      },
      total: 0,
      loading: false,
      WorkPatternsList: [],
      BusinessHallList: [],
      tableData: [],
      checkedData: [],
      dialogFormVisible: false,
      liturgicalSystem: [],
      continuousSystem: [],
      workForID: null,
      showSelect: '1'
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      this.loading = true
      const res = await getWorkArrangeList(this.searchData)
      this.total = Number(res.data.counts)
      this.tableData = res.data.items
      const res1 = await getWorkPatternsList()
      this.WorkPatternsList = [...[...res1.data[1]], ...res1.data[2]]
      this.liturgicalSystem = res1.data[1]
      this.continuousSystem = res1.data[2]
      const res2 = await getBusinessHallList()
      this.BusinessHallList = JSON.parse(res2.data)
      this.loading = false
    },
    handleSizeChange(val) {
      this.searchData.pageSize = val
      this.searchData.page = 1
      this.initData()
    },
    handleCurrentChange(val) {
      this.searchData.page = val
      this.initData()
    },
    getDate(date) {
      this.searchData.month = date
    },
    normalizer(node) {
      if (node.children && !node.children.length) {
        delete node.children
      }
      return {
        id: node.id,
        label: node.name,
        children: node.children
      }
    },
    searchSomeone() {
      if (
        this.searchData.workPatternId === '' &&
        this.searchData.name === '' &&
        this.searchData.employeeNumber === '' &&
        this.searchData.agencyId === null &&
        this.searchData.month === ''
      ) {
        this.$message.error('请输入要搜索的内容！')
      } else {
        this.initData()
      }
    },
    resetAll() {
      this.searchData = {
        page: 1,
        pageSize: 10,
        workPatternId: '',
        name: '',
        employeeNumber: '',
        agencyId: null,
        month: ''
      }
      this.initData()
    },
    forWork() {
      if (this.checkedData.length === 0) {
        this.$message.error('请选择调整人员')
      } else {
        this.dialogFormVisible = true
      }
    },
    choiceChecked(selection) {
      selection.forEach((item) => {
        if (this.checkedData.indexOf(item.id) === -1) {
          this.checkedData.push(item.id)
        }
      })
    },
    changeRadio() {
      this.workForID = null
    },
    handleCloseDialog() {
      this.dialogFormVisible = false
      this.workForID = null
    },
    async handleEnter() {
      if (this.workForID) {
        const res = await editWorkSchedulings({
          userIdList: this.checkedData,
          userType: this.tableData.userType,
          workPatternId: this.workForID,
          workPatternType: this.showSelect
        })
        if (res.code === 200 && res.msg === 'ok') {
          this.$message.success('操作成功！')
          this.initData()
        }
        this.checkedData = []
        this.handleCloseDialog()
      } else {
        this.$message.error('请选择模式名称！')
      }
    },
    jumpTo() {
      this.$router.push({ name: 'workArrange-setting' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
/deep/ th.date {
  .cell {
    padding-left: 17px !important;
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
  text-align: center;
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
.app-container {
  padding: 20px;
  background-color: #f3f4f7;
  padding-top: 23px;
}
/deep/ .el-card {
  overflow: initial;
}
/deep/ .el-form-item_label {
  color: #20232a;
  width: 80px;
  font-weight: 400;
  text-align: right;
  padding-left: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
}
/deep/ .search-button {
  padding: 10px 20px !important;
  border-radius: 5px !important;
  font-weight: 400;
}
/deep/ .reset-btn {
  width: 90px;
  margin-left: 12px;
  border-radius: 5px;
}
/deep/ .box-card {
  padding: 20px;
  margin-bottom: 20px;
  padding-top: 20px;
  padding-left: 26px;
  padding-right: 50px;
}
/deep/ .el-card__body {
  padding: 0;
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
.raidobox {
  font-weight: 700;
  color: #333;
}
/deep/ .el-radio__input.is-checked + .el-radio__label {
  color: #333;
}
</style>

