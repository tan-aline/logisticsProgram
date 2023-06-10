import { createAPI } from '@/utils/request'

// 获取线路类型数据
export const getFreightList = () => createAPI(`/carriages`, 'get')

// 删除运费
export const delfreight = id => createAPI(`/carriages/${id}`, 'delete', id)

// 添加运费
export const addfreight = (data) => createAPI(`/carriages`, 'post', data)
