export const numberWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const truncateText = (text: string, length = 15) => {
  if (text.length > length) {
    return text.slice(0, length - 3) + "...";
  } else {
    return text;
  }
};

export const simplifyNumber = (num: number) => {
  const suffixes = ["", "k", "m", "b"];
  let suffixIndex = 0;

  while (num >= 1000 && suffixIndex < suffixes.length - 1) {
    num /= 1000;
    suffixIndex++;
  }

  const suffix = suffixes[suffixIndex];
  const roundedNum = Math.round(num * 100) / 100;

  return roundedNum + suffix;
};
