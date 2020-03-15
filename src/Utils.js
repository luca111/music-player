export const getFormattedTime = t => {
  const hours = Math.floor(t / 60);
  let minutes = Math.floor(t % 60);
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
};
