// the following functions sourced from Voices src/utils/Util.jsx

export function sumArrayByKey(array = [], key = "") {
  return array
    .map((element) => element[key])
    .reduce((accumulator, current) => accumulator + Number(current), 0);
}

/* Takes an array of objects and returns an array of the specified field values */
export function arrayOfField(arr, field) {
  let newArr = arr.reduce((acc, item) => {
    acc.push(item[field]);
    return acc;
  }, []);

  return newArr;
}
