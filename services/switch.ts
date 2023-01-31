/* eslint-disable no-const-assign */
/* eslint-disable no-unused-vars */
export const GradeSwitch = (grade: any): any => {
  let ans;
  switch (grade) {
    case 'A':
      ans = 5;
      break;
    case 'B':
      ans = 4;
      break;
    case 'C':
      ans = 3;
      break;
    case 'D':
      ans = 2;
      break;
    case 'F':
      ans = 0;
      break;
    default:
      return null;
  }
  return ans;
};

export const calcCGPA = (results: any) => {
  let totalCreditLoad = 0;
  let sum = 0;
  let ans;
  results.forEach((result: any) => {
    totalCreditLoad += parseInt(result.creditLoad);
    const currentSum = parseInt(result?.creditLoad) * GradeSwitch(result?.grade);
    sum += currentSum;
    console.log(sum / totalCreditLoad);
    ans = sum / totalCreditLoad;
  });
  return ans;
};
