export const createGroups = (words: string[]) => {
  let size: number[];
  const result: string[] = [];
  if (window.innerWidth < 800) size = [2, 3];
  else size = [4, 5];

  for (let i = 0; i < words.length; i += size[1]) {
    const group = words.slice(i, i + size[1]);
    if (group.length >= size[0] && group.length <= size[1]) {
      result.push(group.join(" "));
    } else if (group.length < size[0]) {
      if (result.length > 0) {
        result[result.length - 1] += " " + group.join(" ");
      } else {
        result.push(group.join(" "));
      }
    }
  }
  return result;
};
