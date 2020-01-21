const containsDuplicate = nums => {
  const lengthNums = nums.length;
  const newSet = new Set(nums);
  const lengthSet = newSet.size;

  if (lengthSet === lengthNums) {
    return false;
  } else {
    return true;
  }
};

module.exports = containsDuplicate;
