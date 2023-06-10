import { createAPI } from '@/utils/request'

export const getWorkArrangeList = data => createAPI(`/work-schedulings`, 'get', data)

export const getWorkPatternsList = () => createAPI(`/work-patterns/all`, 'get')

export const getBusinessHallList = () => createAPI(`/business-hall/tree`, 'get')

export const editWorkSchedulings = (data) => createAPI(`/work-schedulings`, 'put', data)

export const getWorkPatterns = (data) => createAPI(`/work-patterns/page`, 'get', data)

export const delWorkPatterns = (id) => createAPI(`/work-patterns/${id}`, 'delete')

export const addWorkHistory = data => createAPI(`/work-patterns`, 'post', data)

export const updateWorkHistory = data => createAPI(`/work-patterns`, 'put', data)

export const workHistoryList = data => createAPI(`/work-patterns/page`, 'get', data)

export const workHistoryInfo = data => createAPI(`/work-patterns/${data}`, 'get', data)

export const deleteWorkHistory = data => createAPI(`/work-patterns/${data}`, 'delete', data)
