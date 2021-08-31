import axios from "axios";

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

// https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark
export const getNationalParks = async (query, forceFailure = false) => {
  if (forceFailure) {
    throw new Error("force failure");
  }

  const resp = await axios.get(
    `https://developer.nps.gov/api/v1/parks?q=${encodeURIComponent(
      query
    )}&api_key=PtIddeWbrheOX0MBGLaaBrDtfX2IfZJXtf1iJ9Qb`
  );
  return resp;
};
