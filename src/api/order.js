/*
 * @Author: zhangyanxin
 * @Date: 2020-02-20
 *
 * 订单管理
 */

import { createAPI } from '@/utils/request'

// 获取订单分页数据/order-manager/order/page
export const orderList = data => createAPI('/order-manager/order/page', 'post', data)
// 获取订单详情数据
export const orderDetail = id => createAPI(`/order-manager/order/${id}`, 'get')
// 更新订单
export const updateOrder = (id, data) => createAPI(`/order-manager/order/${id}`, 'post', data)
// 获取订单轨迹
export const getOrderTrackApi = (id) => createAPI(`transport-order-manager/track/${id}`, 'get')
// 获取地区manager/areas/children?parentId=1
export const orderCity = (id) => createAPI(`/areas/children?parentId=${id}`, 'get')
// 下拉框/goodsType/simple
export const getSlectList = () => createAPI('/goodsType/simple', 'get')
// 更新表单保存/order-manager/cargo/
export const putTable = (id, data) => createAPI(`/order-manager/cargo/${id}`, 'put', data)
// 删除表单/order-manager/cargo/
export const delTable = id => createAPI(`/order-manager/cargo/${id}`, 'delete')

