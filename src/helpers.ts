const generateRandomKey = (): string => {
  return Math.random()
    .toString(32)
    .slice(2, 10);
};

export { generateRandomKey };
