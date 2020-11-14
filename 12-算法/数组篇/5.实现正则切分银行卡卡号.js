function segmentationFun(str) {
  const result = str.replace(/\d{4}(?=(\d{4})*)/g, '$& ')
  return result
}
const str = '621533277738372';
const r = segmentationFun(str);
console.log('r', r);