import { isArray, isObject, isString, isNumber } from "util";

export function isNull(value: any) {
  return value === null || value === undefined;
}
export function isEmpty(value: any) {
  if (isNull(value)) {
    return true;
  }
  if (isArray(value)) {
    return value.length === 0;
  }
  if (isObject(value)) {
    return Object.getOwnPropertyNames(value).length === 0;
  }
  if (isString(value)) {
    return value === "";
  }
  if (isNumber(value)) {
    return false;
  }
  return false;
}
