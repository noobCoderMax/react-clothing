const judgeType = (value:any) => {
  let type = typeof value;
  if (type !== 'object') { 
      return type;
  }
  console.log("type",Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1'));
  
  // 如果是引用数据类型，再进一步判断，正则返回结果
  return Object.prototype.toString.call(value).replace(/^\[object (\S+)\]$/, '$1');
}

export default judgeType