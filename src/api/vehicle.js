
import { createAPI } from '@/utils/request'

// 获取车辆类型
export const getvehicles = () => createAPI('/truckType/simple', 'get')

// 获取所有车辆列表
export const getTruckTypeld = (obj) => createAPI('/truck/page', 'get', obj)

// 新增车辆
export const addTrucker = (obj) => createAPI('/truck', 'post', obj)

// 获取车辆详情
export const getTrucker = (id) => createAPI(`/truck/${id}`, 'get')
