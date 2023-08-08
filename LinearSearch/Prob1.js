function linearSearch(values,target){
  for( let i=0; i < values.length; i++ ){
    if(values[i] === target){
      return i + 1;
    }
  }
  return -1
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(linearSearch(numbers,90));