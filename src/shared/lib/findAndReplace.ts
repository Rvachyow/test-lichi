export const findAndReplace = <T extends {id: string}>(arr: T[], obj: T): T[] => {
  const newArr = [...arr];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === obj.id) {
      newArr[i] = obj;
      return newArr;
    }
  }
  return arr;
};
