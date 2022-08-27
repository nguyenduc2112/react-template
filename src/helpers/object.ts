import { IObject } from 'types/object'

export const shallowCompare: any = (obj1: IObject, obj2: IObject): boolean =>
  Object.keys(obj1).length === Object.keys(obj2).length &&
  Object.keys(obj1).every((key: any): boolean => obj1[key] === obj2[key])
