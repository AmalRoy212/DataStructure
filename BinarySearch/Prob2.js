function binarysearch(values,target){
  let left = 0;
  let right = values.length - 1;

  if(values[right] === target){
    return right + 1;
  }

  while(left < right){
    let mid = Math.floor((left + right)/2);
    if(values[mid] === target){
      return mid + 1;
    }else if (target > values[mid]){
      left = mid;
    }else if (target < values[mid]){
      right = mid;
    }
  }

  return -1;
}

let newA = [10,20,30,40,50];

console.log(binarysearch(newA,50));