<template>
  <div class="dashboard-container car-models customer-list-box">
    <div
      class="searchBox"
    >
      <!-- 搜索卡片 -->
      <el-card
        class="search-card"
        style="margin: 20px;"
      >
        <!-- 搜索表单 -->
        <el-form
          :inline="true"
          class="search-form"
          :model="formInline"
        >
          <el-form-item
            label="车辆编号"
            class="form-item"
            prop="id"
          >
            <el-input
              v-model="formInline.id"
              placeholder="请输入车辆编号"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="应载重量"
            class="form-item"
          >
            <el-select
              v-model="formInline.allowableLoad"
              placeholder="请选择应载重量"
            >
              <el-option
                v-for="item in allowableLoad"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="应载体积"
            class="form-item"
          >
            <el-select
              v-model="formInline.allowableVolume"
              placeholder="请选择应载体积"
            >
              <el-option
                v-for="item in allowableVolume"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="车辆类型"
            class="form-item"
            prop="name"
          >
            <el-input
              v-model="formInline.name"
              placeholder="请输入车辆类型"
            ></el-input>
          </el-form-item>
          <el-form-item class="form-item">
            <el-button
              type="warning"
              @click="searchData"
            >搜索</el-button>
            <el-button
              class="cancel"
              style="padding: 13px 30px;"
              @click="reset"
            >重置</el-button>
          </el-form-item>
          <!-- 搜索表单 -->
        </el-form>
      </el-card>
      <!-- 搜索卡片 -->

      <!-- 表单卡片 -->
      <el-card
        class="box-card"
        style="margin: 20px;"
      >
        <el-button
          type="warning"
          style="float: left"
          @click="increaseTheNumberOfVehicles"
        >新增车型</el-button>
        <!-- Table 表格 -->
        <el-table
          v-loading="loading"
          element-loading-text="拼命加载中"
          :data="vehicleList"
          stripe
        >
          <el-table-column
            label="序号"
            type="index"
          > </el-table-column>
          <el-table-column
            label="车型编号"
            prop="id"
          > </el-table-column>
          <el-table-column
            label="车辆类型"
            prop="name"
          > </el-table-column>
          <el-table-column
            label="车型数量"
            prop="num"
          > </el-table-column>
          <el-table-column
            label="应载重量（吨）"
            prop="allowableLoad"
          >
          </el-table-column>
          <el-table-column
            label="应载体积（立方米）"
            prop="allowableVolume"
          >
          </el-table-column>
          <el-table-column
            label="长（米）"
            prop="measureLong"
          >
          </el-table-column>
          <el-table-column
            label="宽（米）"
            prop="measureWidth"
          >
          </el-table-column>
          <el-table-column
            label="高（米）"
            prop="measureHigh"
          >
          </el-table-column>
          <el-table-column label="操作">
            <template v-slot="{ row }">
              <el-button
                type="text"
                size="mini"
                style="color: #419eff"
                @click="editTheCarModel(row)"
              >编辑</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button
                size="mini"
                type="text"
                @click="deleteAVehicle(row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- Table 表格 -->

        <!-- 分页 -->
        <el-row
          style="margin: 30px; height: 50px"
          type="flex"
          justify="center"
          align="center"
        >
          <el-pagination
            :current-page="pageList.page"
            :page-sizes="[10, 20, 30]"
            :page-size="pageList.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </el-row>
        <!-- 分页 -->
      </el-card>
      <!-- 表单卡片 -->
    </div>
    <carModelsAdd
      v-if="isShow"
      :open.sync="isShow"
      :title="title"
      :car-i-d="carID"
      @refresh="refreshThePage"
    ></carModelsAdd>
  </div>
</template>

<script>
import {
  getVehiclePagingData,
  deleteVehicleType
} from '@/api/vehiclePagingData'
import carModelsAdd from '@/views/transit/components/car-models-add.vue'
export default {
  components: {
    carModelsAdd
  },
  data() {
    return {
      loading: true,
      formInline: {
        // 搜索表单数据
        id: '',
        allowableLoad: '',
        allowableVolume: ''
      },
      loadWeight: null, // 应载重量
      loadVolume: null, // 应载体积
      value1: '',
      total: null, // 总数
      pageList: {
        page: 1, // 当前页码
        pageSize: 10 // 每页显示条数
      },
      vehicleList: [
        {
          id: '', // 车型编号
          name: '', // 车辆类型
          num: null, // 车型数量
          allowableLoad: null, // 应载重量
          allowableVolume: null, // 应载体积
          measureLong: null, // 长
          measureWidth: null, // 宽
          measureHigh: null // 高
        }
      ],
      isShow: false,
      title: '',
      vehicleId: null,
      carID: '',
      allowableLoad: [
        {
          value: 'RANGE_LEVEL_1',
          name: '<1.8（吨）'
        },
        {
          value: 'RANGE_LEVEL_2',
          name: '1.8-6（吨）'
        },
        {
          value: 'RANGE_LEVEL_3',
          name: '6-14（吨）'
        },
        {
          value: 'RANGE_LEVEL_4',
          name: '14-30（吨）'
        },
        {
          value: 'RANGE_LEVEL_5',
          name: '30-50（吨）'
        },
        {
          value: 'RANGE_LEVEL_6',
          name: '50-100（吨）'
        },
        {
          value: 'RANGE_LEVEL_7',
          name: '100>（吨）'
        }
      ],
      allowableVolume: [
        {
          value: 'RANGE_LEVEL_1',
          name: '<3（m³）'
        },
        {
          value: 'RANGE_LEVEL_2',
          name: '3-5（m³）'
        },
        {
          value: 'RANGE_LEVEL_3',
          name: '5-10（m³）'
        },
        {
          value: 'RANGE_LEVEL_4',
          name: '10-15（m³）'
        },
        {
          value: 'RANGE_LEVEL_5',
          name: '15-30（m³）'
        },
        {
          value: 'RANGE_LEVEL_6',
          name: '30-50（m³）'
        },
        {
          value: 'RANGE_LEVEL_7',
          name: '50-80（m³）'
        },
        {
          value: 'RANGE_LEVEL_8',
          name: '80-150（m³）'
        },
        {
          value: 'RANGE_LEVEL_9',
          name: '150>（m³）'
        }
      ]
    }
  },
  created() {
    this.fetchData() // 在组件创建时调用 fetchData 方法，获取数据
  },
  methods: {
    handleSizeChange(val) {
      // 每页显示条数改变时触发
      this.pageList.pageSize = val // 将每页显示条数赋值给 pageList 对象的 pageSize 属性
      this.pageList.page = 1 // 将当前页码赋值为 1
      this.fetchData() // 调用 fetchData 方法，获取数据
    },
    handleCurrentChange(val) {
      // 当前页码改变时触发
      this.pageList.page = val // 将当前页码赋值给 pageList 对象的 page 属性
      this.fetchData() // 调用 fetchData 方法，获取数据
    },
    async fetchData() {
      // 获取数据
      const { data } = await getVehiclePagingData({
        ...this.pageList,
        ...this.formInline
      }) // 调用 getVehiclePagingData 方法，传入分页信息
      this.vehicleList = data.items // 将获取到的车型列表赋值给 vehicleList
      this.total = +data.counts // 将获取到的车型总数赋值给 total
      this.loading = false
    },
    async deleteAVehicle(row) {
      // 删除车型
      const res = await deleteVehicleType(row.id) // 调用 deleteVehicleType 方法，传入车型 ID
      if (res.code === 1) {
        this.$message.warning('车型中有使用的车辆，不可以删除')
      } else {
        this.$message.success('删除成功') // 显示成功提示
        this.fetchData() // 调用 fetchData 方法，获取数据
      }
    },
    increaseTheNumberOfVehicles() {
      // 新增车型弹框
      this.isShow = true // 显示新增车型弹框
      this.title = '新增车型' // 设置弹框标题
    },
    editTheCarModel(row) {
      // 编辑车型
      this.carID = row.id // 将车型 ID 赋值给 carID
      this.isShow = true // 显示编辑车型弹框
      this.title = '编辑车型' // 设置弹框标题
    },
    refreshThePage() {
      this.fetchData() // 调用 fetchData 方法，获取数据
    },
    // 重置页面
    reset() {
      this.pageList = {
        page: 1, // 当前页码
        pageSize: 10
      }
      this.formInline = {}
      this.loading = true
      this.fetchData()
    },
    // 定义一个异步方法，用于搜索车型de数据
    async searchData() {
      const result = Object.values(this.formInline).some((item) => item !== '')
      if (result) {
        // 调用 getVehiclePagingData 方法，传入合并后的分页信息和搜索条件
        const { data } = await getVehiclePagingData({
          ...this.formInline,
          ...this.pageList
        })
        // 将获取到的车型列表赋值给 vehicleList
        this.vehicleList = data.items
        // 将获取到的车型总数赋值给 total
        this.total = +data.counts
        // 将获取到的页码赋值给 pageList 对象的 page 属性
        this.pageList.page = data.page
        // 将获取到的每页显示条数赋值给 pageList 对象的 pageSize 属性
        this.pageList.pageSize = data.pageSize
        this.loading = true
        this.fetchData()
      } else {
        this.$message.warning('请选择至少一项进行搜索')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cancel {
  color: #2a2929;
  border: 1px solid #d8dde3;
  border-radius: 5px;
  font-weight: 400;
  &:hover {
    background: #ffeeeb;
    border: 1px solid #f3917c;
    color: #e15536;
  }
}
.search-card {
  padding: 20px;

  .search-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .form-item {
      width: calc(33.33% - 20px);
      margin-bottom: 20px;
    }
  }
}
.box-card {
  margin-top: 20px;
}
::v-deep .el-table .cell {
  padding-right: 0px;
}
</style>
