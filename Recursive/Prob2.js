function addintion(value){
  if(value === 1){
    return 1
  }else{
    return value + addintion(value - 1)
  }
}

console.log(addintion(5));