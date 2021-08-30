export function sumArrayByKey(array = [], key = "") {
  return array
    .map((element) => element[key])
    .reduce((accumulator, current) => accumulator + Number(current), 0);
}
