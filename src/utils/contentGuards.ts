import { SbEditableContent } from 'storyblok-react';

export const isNull = <T>(term: T | null): term is null => {
  return term === null;
};

export const isObject = <T extends Record<string, unknown>, U>(
  term: T | U
): term is NonNullable<T> => {
  return !isNull(term) && typeof term === 'object';
};

export const isSbEditableContent = (component: unknown): component is SbEditableContent =>
  isObject(component) &&
  typeof component.component !== 'undefined' &&
  typeof component._uid !== 'undefined' &&
  typeof component._editable !== 'undefined' &&
  component._editable !== null;