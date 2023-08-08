function reverseArray(values,index){
  if(index < 0 ){
    return
  }
  console.log(values[index]);
  reverseArray(values,index-1);
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

reverseArray(numbers,numbers.length-1)