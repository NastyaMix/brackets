module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = [];

  if (str.length % 2 != 0) {
    return false;
  }

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < bracketsConfig.length; j++) {
      if (open[open.length - 1] == bracketsConfig[j][0] && str[i] == bracketsConfig[j][1]) {
        open.pop();
      } else {
        if (str[i] == bracketsConfig[j][0]) {
          open.push(str[i]);
        }
      }
    }
  }
  return (open.length == 0) ? true : false;
}

