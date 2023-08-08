let numbers = [10,20,30,40,50,60,70];

function binarysearch(values,data){
  let left = 0;
  let right = values.length - 1;

  while(left < right){
    let mid = Math.floor((left + right)/2);

    if(values[mid] == data){
      return mid;
    }else if (values[mid] > data){
      right = mid;
    }else if (values[mid] < data){
      left = mid
    }
  }
  return -1;
}

let pos = binarysearch(numbers,50);
console.log(pos);