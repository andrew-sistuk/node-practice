import { SORT_ORDER } from '../constans/index.js';

export const parseSortOrder = (sortOrder) => {
  const isNown = Object.values(SORT_ORDER).includes(sortOrder);
  if (isNown) {
    return sortOrder;
  }

  return SORT_ORDER.ASC;
};
