class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class List{
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(data){
    let newNode = new Node(data);

    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  print(){
    let current = this.head;

    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

  remove(position){
    let current = this.head;
    // let current = this.head;

    if (position === 1) {
      this.head = current.next;
      return
    }

    while(position > 2){
      position --;
      current = current.next;
    }
    
    if (current.next.next === null){
      current.next = null;
      this.tail = current;
      return
    }

    current.next = current.next.next;

  }

}

let newList = new List();

newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);
newList.append(50);

newList.print();

console.log("\n",newList.head.data,"head",newList.tail.data,"tail \n");

newList.remove(5);

newList.print();

console.log("\n", newList.head.data, "head", newList.tail.data, "tail \n");
