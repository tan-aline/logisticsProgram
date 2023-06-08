
import { createAPI } from '@/utils/request'

// 获取车辆类型
export const getvehicles = () => createAPI('/truckType/simple', 'get')

// 获取所有车辆列表
export const getTruckTypeld = (obj) => createAPI('/truck/page', 'get', obj)

// 获取已停用的车辆
export const getUnusedTrucks = () => createAPI('/unWorkingTrucks', 'get')

// 获取已启用的车辆
export const getUsedTrucks = () => createAPI('/workingTrucks', 'get')
