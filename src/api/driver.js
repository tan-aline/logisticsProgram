import { createAPI } from '@/utils/request'

// 获取线司机列表信息
export const getDriverInfo = (obj) => createAPI(`/driver/page`, 'get', obj)
// 获取部门
export const getAgencyList = () => createAPI(`/business-hall/tree`, 'get')
// 获取可分配车辆
export const getTruckList = () => createAPI(`/unWorkingTrucks`, 'get')
