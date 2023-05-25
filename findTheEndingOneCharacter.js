function confirmEnding(str, target) {
  if(str[str.length - 1] === target)
  {
    return true
  }
  return false;
}

confirmEnding("Bastian", "n");
