function text_truncate(str, length, ending) {
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises."));
