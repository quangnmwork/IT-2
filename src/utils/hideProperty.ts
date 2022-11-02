export const hideProperty = (obj, key) => {
  if (obj[key]) delete obj[key];
  return obj;
};
