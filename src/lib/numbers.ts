export function nextId(lastId: string) {
  let [template, lastIdStr] = lastId.split("_");
  let lastIdNum = parseInt(lastIdStr) + 1;

  let newIdStr = template + "_";
  if (lastIdNum < 10) {
    newIdStr += "00" + lastIdNum;
  } else if (lastIdNum < 100) {
    newIdStr += "0" + lastIdNum;
  } else {
    newIdStr += lastIdNum;
  }
  return newIdStr
}
