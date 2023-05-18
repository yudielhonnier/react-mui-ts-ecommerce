export const getCategoriesIDArray = (p) => {
  const list = [];
  p.category.forEach((c) => {
    list.push(c.id);
  });
  return list;
};
