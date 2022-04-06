export const satinize = (value: string, max = 30) => {
  return value.length > max ? `${value.slice(0, max)}...` : value;
};
