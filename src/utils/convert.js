export const movieSplit = (value, num) => {
  if (value?.length > num) {
    return value.slice(0, num) + "...";
  } else {
    return value;
  }
};
