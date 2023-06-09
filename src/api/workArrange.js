import { createAPI } from '@/utils/request'

export const getWorkArrangeList = data => createAPI(`/work-schedulings`, 'get', data)

export const getWorkPatternsList = () => createAPI(`/work-patterns/all`, 'get')

export const getBusinessHallList = () => createAPI(`/business-hall/tree`, 'get')

export const editWorkSchedulings = (data) => createAPI(`/work-schedulings`, 'put', data)

export const getWorkPatterns = () => createAPI(`/work-patterns/page`, 'get')
