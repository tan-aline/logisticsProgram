import createAPI from '@/utils/request'

// 获取车辆分页数据
export const getVehiclePagingData = (params) => createAPI('truckType/page', 'get', params)

// 删除车辆类型
export const deleteVehicleType = (id) => createAPI(`truckType/${id}`, 'delete', id)

// 添加车辆类型
export const addVehicleTyp = (obj) => createAPI('/truckType', 'post', obj)

// 获取车辆类型详情
export const getVehicleDetails = (id) => createAPI(`/truckType/${id}`, 'get', id)

// 更新车辆类型
export const updateVehicleType = (obj, id) => createAPI(`/truckType/${id}`, 'put', obj)
