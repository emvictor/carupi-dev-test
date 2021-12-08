export const handleMetacriticColor = (value: number) => {
  if (value > 0 && value <= 45) {
    return "red.500";
  }
  if (value > 45 && value <= 75) {
    return "yellow.500";
  }
  if (value > 75 && value <= 100) {
    return "green.500";
  }
};
