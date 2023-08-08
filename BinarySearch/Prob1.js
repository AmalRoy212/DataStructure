let numbers = [10,20,30,40,50,60,70,80,90];

function binarysearch(values,data){
  let left = 0;
  let right = values.length - 1;

  while(left < right){
    
    if(values[right] === data){
      return right + 1;
    }

    let mid = Math.floor((left + right)/2);
    if(values[mid] === data){
      return mid + 1;
    }else if (data > values[mid]){
      left = mid;
    }else if (data < values[mid]){
      right = mid
    }
  }
  return -1;
}

let pos = binarysearch(numbers,90);
console.log(pos);