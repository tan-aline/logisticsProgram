<!-- 运费管理 -->
<template>
  <div class="dashboard-container waybill-list customer-list-box">
    <div class="freight">
      <div class="tables">
        <el-button
          class="btn-add"
          size="mini"
          type="primary"
          @click="addtemplate"
        >新增模板</el-button>

        <el-table
          class="el-tables"
          style="width: 100%"
          :data="list"
          row-key="id"
          width="500px"
        >
          <el-table-column
            prop="templateType"
            label="模板类型"
          />
          <el-table-column
            prop="transportType"
            label="运送类型"
          />
          <!-- <el-table-column
            prop="associatedCityList"
            label="关联城市"
          />
          <template #default="{row}">
            {{ row }}
          </template> -->
          <el-table-column
            prop="associatedCityList"
            label="关联城市"
          >
            <template v-slot="{ row }">
              <span>
                {{ row.associatedCityList | formateCity }}
              </span>
            </template>
          </el-table-column>

          <el-table-column
            prop="firstWeight"
            label="首重"
          />
          <el-table-column
            prop="continuousWeight"
            label="续重"
          />
          <el-table-column
            prop="lightThrowingCoefficient"
            label="轻抛系重"
          />
          <el-table-column
            label="操作"
            align="center"
          >
            <template v-slot="{ row }">
              <el-button
                size="mini"
                type="text"
                @click="posttemplate(row.id)"
              >编辑
              </el-button>
              <span style="color: #ccc">|</span>
              <el-button
                size="mini"
                type="text"
                style="color: red"
                @click="delfreights(row.id)"
              >删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <!-- 放置一个弹层 用来编辑新增节点 -->
    <el-dialog
      :title="`${form.id ? '编辑' : '新增'}模板`"
      :visible.sync="dialogVisible"
      width="540px"
      :before-close="handleClose"
    >
      <!-- 表单 -->
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        label-width="110px"
      >
        <el-form-item
          label="模板类型"
          prop="templateType"
        >
          <el-select
            v-model="form.templateType"
            placeholder="请选择模板类型"
            clearable
            style="width: 410px"
          >
            <el-option
              label="同城寄"
              value="1"
            ></el-option>
            <el-option
              label="省内寄"
              value="2"
            ></el-option>
            <el-option
              label="经济区互寄"
              value="3"
            ></el-option>
            <el-option
              label="跨省"
              value="4"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="运送类型"
          prop="transportType"
        >
          <el-select
            v-model="form.transportType"
            placeholder="请选择运送类型"
            clearable
            style="width: 410px"
          >
            <el-option
              label="普快"
              value="1"
            ></el-option>
            <el-option
              label="特快"
              value="2"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          v-model="form.associatedCityList[1]"
          label="关联城市"
          prop="associatedCityList"
        >
          <span v-if="form.templateType === '3'">
            <el-checkbox-group v-model="form.associatedCityList">
              <el-checkbox label="2">京津冀</el-checkbox>
              <el-checkbox label="3">江浙沪</el-checkbox>
              <el-checkbox label="4">川渝</el-checkbox>
              <el-checkbox label="5">黑吉辽</el-checkbox>
            </el-checkbox-group>
          </span>
          <span
            v-else
            label="全国"
          >全国</span>
        </el-form-item>

        <el-form-item
          label="首重价格"
          prop="firstWeight"
        >
          <el-input
            v-model.number="form.firstWeight"
            placeholder="请输入首重价格"
            style="position: absolute"
          ></el-input>
          <span style="position: relative; float: right; left: -20px">元</span>
        </el-form-item>

        <el-form-item
          label="续重价格"
          prop="continuousWeight"
        >
          <el-input
            v-model.number="form.continuousWeight"
            placeholder="请输入续重价格"
            style="position: absolute"
          ></el-input>
          <span style="position: relative; float: right; left: -20px">元</span>
        </el-form-item>

        <el-form-item
          label="轻抛系数"
          prop="lightThrowingCoefficient"
        >
          <el-input
            v-model.number="form.lightThrowingCoefficient"
            placeholder="请输入轻抛系数"
          ></el-input>
        </el-form-item>

        <span style="display: flex; justify-content: center">
          <el-button
            type="primary"
            style="background-color: #e15536"
            @click="queding"
          >确 定</el-button>
          <el-button @click="btnCancel">取 消</el-button>
        </span>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getFreightList, delfreight, addfreight } from '@/api/freightManage'
export default {
  filters: {
    formateCity(ids) {
      for (const key in ids) {
        if (ids[key] === '1') {
          ids[key] = '全国'
        } else if (ids[key] === '2') {
          ids[key] = '京津冀'
        } else if (ids[key] === '3') {
          ids[key] = '江浙沪'
        } else if (ids[key] === '4') {
          ids[key] = '川渝'
        } else if (ids[key] === '5') {
          ids[key] = '黑吉辽'
        }
      }
      return ids.join(',')
      // const newArr = ids.map(item => {
      //   if (item === '1') {
      //     item = '全国'qq
      //   } else if (item === '2') {
      //     item = '京津冀'
      //   } else if (item === '3') {
      //     item = '江浙沪'
      //   } else if (item === '4') {
      //     item = '川渝'
      //   } else if (item === '5') {
      //     item = '黑吉辽'
      //   }
      // })
      // console.log(newArr)
      // return newArr.join(', ')
      // console.log(ids['0'])
    }
  },
  data() {
    return {
      city: {
        1: '全国',
        2: '京津冀',
        3: '江浙沪',
        4: '川渝',
        5: '黑吉辽'
      },
      list: [], // 获取数据
      dialogVisible: false, // 控制提示框的开关
      form: {
        templateType: '', // 模板类型
        transportType: '', // 运送类型
        associatedCityList: [], // 关联城市
        continuousWeight: '', // 续重价格
        firstWeight: '', // 首重价格
        id: '',
        lightThrowingCoefficient: '', // 轻抛价格
        delivery: false,
        type: [],
        city: ''
      },
      // 输入框校验
      rules: {
        templateType: [
          { required: true, message: '请选择模板类型', trigger: 'blur' }
        ],
        transportType: [
          { required: true, message: '清选择运送类型', trigger: 'blur' }
        ],
        // associatedCityList: [{ required: true, message: '全国', trigger: 'blur' }],
        firstWeight: [
          { required: true, message: '首重价格不能为空', trigger: 'blur' },
          { type: 'number', message: '首重必须为数字值' }
        ],
        continuousWeight: [
          { required: true, message: '续重价格不能为空', trigger: 'blur' },
          { type: 'number', message: '续重必须为数字值' }
        ],
        lightThrowingCoefficient: [
          { required: true, message: '轻抛系数不能为空', trigger: 'blur' },
          { type: 'number', message: '轻抛系数必须为数字值' }
        ]
      }
    }
  },
  created() {
    this.getList() // 获取运费列表
  },
  methods: {
    // 对话框
    handleClose(done) {
      this.$refs.form.resetFields() // 重置表单
      done()
    },
    // 获取数据
    async getList() {
      const { data } = await getFreightList()
      this.list = data
      this.list.forEach((e) => {
        // 模板 数字判断字符串
        if (e.templateType === 1) {
          e.templateType = '同城寄'
        } else if (e.templateType === 2) {
          e.templateType = '省内寄'
        } else if (e.templateType === 3) {
          e.templateType = '经济区互寄'
        } else if (e.templateType === 4) {
          e.templateType = '跨省'
        }
        // 运送 数字判断字符串
        e.transportType === 1
          ? (e.transportType = '普快')
          : (e.transportType = '特快')
        // 关联 数字判断字符串
        // e.associatedCityList === 1 ? (e.associatedCityList = '全国') : (e.associatedCityList = '京津冀')
        // if (e.associatedCityList.includes('1')) {
        //   e.associatedCityList = '全国'
        // } else if (e.associatedCityList.includes('2')) {
        //   e.associatedCityList = '京津冀'
        // } else if (e.associatedCityList.includes('3')) {
        //   e.associatedCityList = '江浙沪'
        // } else if (e.associatedCityList.includes('4')) {
        //   e.associatedCityList = '川渝'
        // } else if (e.associatedCityList.includes('5')) {
        //   e.associatedCityList = '黑辽宁'
        // } else if (e.associatedCityList.includes('2', '3')) {
        //   e.associatedCityList = '京津冀,江浙沪'
        // } else if (e.associatedCityList.includes('2', '4')) {
        //   e.associatedCityList = '京津冀,川渝'
        // }

        // e.associatedCityList = e.associatedCityList.map(city => {
        //   if (city === 1) {
        //     return '全国'
        //   }
        //   if (city.includes('2')) {
        //     return '京津冀'
        //   }
        //   if (city.includes('3')) {
        //     return '江浙沪'
        //   }
        //   if (city.includes('4')) {
        //     return '川渝'
        //   }
        //   if (city.includes('5')) {
        //     return '黑辽宁'
        //   }
        //   return city
        // })

        // if (this.list.associatedCityList.includes('1')) {
        //   return '全国'
        // } else {
        //   return this.list
        // }
      })
    },
    // 添加
    async addtemplate() {
      // 添加是id为null 用于判断form表单的title
      this.form.id = null
      // 打开对话框
      this.dialogVisible = true
    },
    // 编辑
    async posttemplate(id) {
      // 打开对话框
      this.dialogVisible = true
      // 编辑的时候传id用于判断form表单的title
      this.form.id = id
      const { data } = await getFreightList()
      this.form = data[0]
      console.log(this.form)
      // 拿到的数据是数字 要转成对应的字符串
      if (this.form.templateType === 1) {
        this.form.templateType = '同城寄'
      } else if (this.form.templateType === 2) {
        this.form.templateType = '省内寄'
      } else if (this.form.templateType === 3) {
        this.form.templateType = '经济区互寄'
      } else if (this.form.templateType === 4) {
        this.form.templateType = '跨省'
      }
      // 运送 数字判断字符串
      this.form.transportType === 1
        ? (this.form.transportType = '普快')
        : (this.form.transportType = '特快')
      // 关联 数字判断字符串
      this.form.associatedCityList === 1
        ? (this.form.associatedCityList = '全国')
        : (this.form.associatedCityList = '京津冀')
    },
    // 删除
    async delfreights(id) {
      // 删除请求
      await delfreight(id)
      // 提示信息
      this.$message.success('删除成功')
      // 重新获取数据
      this.getList()
    },
    // 确认的时候
    queding() {
      // 确定的时候 校验表单
      this.$refs.form.validate(async (isok) => {
        if (isok) {
          if (this.form.id) {
            // 发编辑请求的时候需要把字符串重新转回数字 ，不然请求参数错误500
            if (this.form.templateType === '同城寄') {
              this.form.templateType = 1
            } else if (this.form.templateType === '省内寄') {
              this.form.templateType = 2
            } else if (this.form.templateType === '经济区互寄') {
              this.form.templateType = 3
            } else if (this.form.templateType === '跨省') {
              this.form.templateType = 4
            }
            // 运送
            this.form.transportType === '普快'
              ? (this.form.transportType = 1)
              : (this.form.transportType = 2)
            // 关联
            this.form.associatedCityList === '全国'
              ? (this.form.associatedCityList = 1)
              : (this.form.associatedCityList = [2])

            const res = await addfreight(this.form)
            if (res.msg === 'ok') {
              this.$message.success('编辑成功')
            } else {
              this.$message.error(res.msg)
            }
          } else {
            // 发起添加请求
            const res = await addfreight(this.form)
            if (res.msg === 'ok') {
              this.$message.success('添加成功')
            } else {
              this.$message.error(res.msg)
            }
          }
          // 关闭对话框
          this.dialogVisible = false
          this.$refs.form.resetFields() // 重置表单

          // 重新获取列表数据
          this.getList()
        }
      })
    },
    // 关闭的时候
    btnCancel() {
      this.dialogVisible = false
      this.$refs.form.resetFields() // 重置表单
    }
  }
}
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
    .tables {
      width: 96%;
    }
    .btn-add {
      width: 100px;
      height: 40px;
      background: #e15536;
      border-radius: 4px;
      border-color: transparent;
      margin: 25px;
      font-size: 14px;
    }
    .el-tables {
      margin-left: 25px;
    }
    .ipt {
      position: absolute;
    }
  }
}
</style>
