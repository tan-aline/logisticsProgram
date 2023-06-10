<template>
  <div>
    <el-dialog
      :title="title"
      width="30%"
      :visible="open"
      @close="close"
    >
      <!--表单 -->
      <el-form
        ref="addAListOfModels"
        :model="addAListOfModels"
        :rules="rules"
        status-icon
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="车辆类型"
          prop="name"
        >
          <el-input v-model="addAListOfModels.name"></el-input>
        </el-form-item>
        <el-form-item
          label="应载重量"
          prop="allowableLoad"
        >
          <el-input v-model.number="addAListOfModels.allowableLoad">
            <span
              slot="suffix"
              style="color: black"
            >吨</span>
          </el-input>
        </el-form-item>
        <el-form-item
          label="应载体积"
          prop="allowableVolume"
        >
          <el-input v-model.number="addAListOfModels.allowableVolume">
            <span
              slot="suffix"
              style="color: black"
            >立方</span>
          </el-input>
        </el-form-item>
        <el-form-item
          label="长"
          prop="measureLong"
        >
          <el-input v-model.number="addAListOfModels.measureLong">
            <span
              slot="suffix"
              style="color: black"
            >米</span>
          </el-input>
        </el-form-item>
        <el-form-item
          label="宽"
          prop="measureWidth"
        >
          <el-input v-model.number="addAListOfModels.measureWidth">
            <span
              slot="suffix"
              style="color: black"
            >米</span>
          </el-input>
        </el-form-item>
        <el-form-item
          label="高"
          prop="measureHigh"
        >
          <el-input v-model.number="addAListOfModels.measureHigh">
            <span
              slot="suffix"
              style="color: black"
            >米</span>
          </el-input>
        </el-form-item>
      </el-form>
      <!--表单 -->
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="turnOffTheDisplay">取 消</el-button>
        <el-button
          type="primary"
          @click="addOrEdit(title)"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {
  addVehicleTyp,
  getVehicleDetails,
  updateVehicleType
} from '@/api/vehiclePagingData'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    carID: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      addAListOfModels: {
        id: '',
        name: '', // 车辆类型
        goodsTypes: [], // 货物类型列表
        allowableLoad: null, // 应载重量
        allowableVolume: null, // 应载体积
        measureLong: null, // 长
        measureWidth: null, // 宽
        measureHigh: null // 高
      },
      rules: {
        name: [
          { required: true, message: '请输入车辆类型', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        allowableLoad: [
          { required: true, message: '请输入应载重量', trigger: 'blur' },
          {
            pattern: /^(100|[1-9]\d|\d)(\.\d{1,2})?$/,
            message: '应载重量必须在 1 到 100 之间，最多保留两位小数',
            trigger: 'blur'
          }
        ],
        allowableVolume: [
          { required: true, message: '请输入应载体积', trigger: 'blur' },
          {
            pattern: /^(100|[1-9]\d|\d)(\.\d{1,2})?$/,
            message: '应载体积必须在 1 到 100 之间，最多保留两位小数',
            trigger: 'blur'
          }
        ],
        measureLong: [
          { required: true, message: '请输入长度', trigger: 'blur' },
          {
            pattern: /^(100|[1-9]\d|\d)(\.\d{1,2})?$/,
            message: '长度必须在 1 到 100 之间，最多保留两位小数',
            trigger: 'blur'
          }
        ],
        measureWidth: [
          { required: true, message: '请输入宽度', trigger: 'blur' },
          {
            pattern: /^(100|[1-9]\d|\d)(\.\d{1,2})?$/,
            message: '宽度必须在 1 到 100 之间，最多保留两位小数',
            trigger: 'blur'
          }
        ],
        measureHigh: [
          { required: true, message: '请输入高度', trigger: 'blur' },
          {
            pattern: /^(100|[1-9]\d|\d)(\.\d{1,2})?$/,
            message: '高度必须在 1 到 100 之间，最多保留两位小数',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.getCar()
  },
  methods: {
    close() {
      this.$emit('update:open', false) // 关闭弹窗
    },
    turnOffTheDisplay() {
      this.close() // 关闭弹窗
    },
    async addVehicleType() {
      await addVehicleTyp(this.addAListOfModels) // 调用 addVehicleTyp 方法，传入车型列表
      this.$message.success('新增车型成功') // 显示成功提示
      this.close() // 关闭弹窗
      this.$emit('refresh') // 向父组件发送自定义事件，刷新车型列表
    },
    async updateVehicleType() {
      await updateVehicleType(this.addAListOfModels, this.carID) // 调用 updateVehicleType 方法，传入车型列表和车型 ID
      this.$message.success('更新车型成功') // 显示成功提示
      this.close() // 关闭弹窗
      this.$emit('refresh') // 向父组件发送自定义事件，刷新车型列表
    },
    addOrEdit(title) {
      this.$refs.addAListOfModels.validate((val) => {
        if (val) {
          if (title === '新增车型') {
            this.addVehicleType() // 调用 addVehicleType 方法
          } else {
            this.updateVehicleType() // 调用 updateVehicleType 方法
          }
        } else {
          this.$message.warning('请填写完整信息')
        }
      })
    },
    async getCar() {
      if (this.title === '编辑车型') {
        const { data } = await getVehicleDetails(this.carID) // 调用 getVehicleDetails 方法，传入车型 ID
        this.addAListOfModels = data // 将获取到的车型信息赋值给 addAListOfModels
        this.addAListOfModels.goodsTypes = data.goodsTypes // 将获取到的货物类型信息赋值给 addAListOfModels.goodsTypes
      }
    }
  }
}
</script>
