<p align="center">
	<img width="200" src="./README/img/logo.png" alt="Vue logo">
</p>

#### 项目简介
> 物流项目体系包含四个端：管理后台、用户端、司机端以及快递员端

#### 项目展示
<img width="406" src="./README/img/admin.gif" alt="Vue logo"><br>
<img width="100" src="./README/img/siji.gif" alt="Vue logo">
<img width="100" src="./README/img/kuaidiyuan.gif" alt="Vue logo">
<img width="100" src="./README/img/yonghuduan.gif" alt="Vue logo">


### 神领物流 - 管理后台（PC端）

#### 项目简介
管理后台：该后台包括了从收到订单开始，通过仓库拣货发货，再通过分拨进行运输、末端配送，然后进行考核、结算等功能

#### 项目迭代日志：
- v1 - 涉及主流程
  - 后台管理端包含：
    - 基础数据数据
      - 车型管理
      - 车辆管理
      - 司机管理
      - 排班管理
      - 运费管理
    - 营业部管理
      - 快递员管理
      - 快递作业管理
      - 机构作业管理
      - 机构管理
      - 货品类型管理
    - 业务管理
      - 订单管理
      - 运单管理
    - 调度管理
      - 运输任务管理
      - 线路管理
#### 技术栈
vue2+vuex+axios

#### 外网展示
> 部署说明：目前是 git 上传代码后在 gitlab 上自动部署
- https://fe-slwl-manager.itheima.net/#/login

#### 开发环境
- windows 版本 windows 10 企业版
- 开发工具 vscode
- node 版本 v14.19.1
- npm 版本 v6.14.16

#### 运行程序
```sh

1. 安装依赖包

npm i --registry=https://registry.npm.taobao.org

2. 运行程序

npm run dev

3. 浏览器打开

http://localhost:9528/

```

#### 工程结构解析
```
├── public                     # 静态资源 (会被直接复制)
│   │── favicon.ico            # favicon图标
│   │── manifest.json          # PWA 配置文件
│   │── img                    # 静态图片存放
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源 (由 webpack 处理加载)
│   ├── components             # 全局组件
│   ├── icons                  # svg 图标
│   ├── layout                 # 全局布局
│   ├── router                 # 路由
│   ├── store                  # 全局 vuex store
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局方法
│   ├── views                  # 所有页面
│   └── ├── branches           # 货品类型管理，机构管理，机构作业范围，快递作业管理，快递员管理（营业部管理）
│       ├── dashboard           # 首页（）
│       ├── login               # 菜品管理、添加菜品
│       ├── order-manage        # 订单管理
│       ├── transit             # 车型管理，车辆管理，司机管理，排班管理，运费管理（基础数据管理）
│       ├── transport           # 运输任务管理，线路管理（调度管理）
│       ├── waybill             # 运单管理
│       └── 404.vue            # 404报错页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   ├── permission.ts          # 权限管理
│   └── shims-vue.d.ts         # 模块注入
├── dist                       # 打包文件夹（可删除重新打包）
├── tests                      # 测试
├── .circleci/                 # 自动化 CI 配置
├── .browserslistrc            # browserslistrc 配置文件 (用于支持 Autoprefixer)
├── .editorconfig              # 编辑相关配置
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置
├── babel.config.js            # babel-loader 配置
├── cypress.json               # e2e 测试配置
├── jest.config.js             # jest 单元测试配置
├── package.json               # package.json 依赖
├── postcss.config.js          # postcss 配置
├── tsconfig.json              # typescript 配置
└── vue.config.js              # vue-cli 配置

```

#### 涉及到第三方库

- [vue-baidu-map] (https://dafrok.github.io/vue-baidu-map/#/zh/guide/painting)
- [vue-treeselect:] (https://www.vue-treeselect.cn/)
- [element] (https://element.eleme.cn/#/zh-CN/)

#### 文档参考

- vue[https://cn.vuejs.org/v2/guide/]
