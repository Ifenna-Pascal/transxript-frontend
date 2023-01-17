/* eslint-disable no-unused-vars */
export const GradeSwitch = (res: string) => {
  const result = parseInt(res);
  let level;
  if (result <= 45) level = 'F';
  if (result > 45 && result < 50) level = 'D';
  if (result > 50 && result < 60) level = 'C';
  if (result > 60 && result < 70) level = 'B';
  if (result > 70) level = 'A';
  return level;
};
