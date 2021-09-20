import { Maybe } from "@/graphql/sdk";

export function removeDuplicates<T, K extends keyof T>(
  baseItems: Array<T>,
  additionalItems: Array<T>,
  key: K
): Array<T> {
  const baseKeys = baseItems.map((item) => item[key]);
  const filteredItems = additionalItems.filter((item) => baseKeys.indexOf(item[key]) < 0);
  return [...baseItems, ...filteredItems];
}

export function removeNulls<T>(list: Array<Maybe<T>>): Array<T> {
  return list.reduce<Array<T>>((acc, item) => (item ? [...acc, item] : acc), []);
}
