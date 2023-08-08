class Node{
  constructor(data){
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DList{

  constructor(){
    this.head = null;
    this.tail = null
  }

  append(data){
    let newNode = new Node(data);

    if(this.head === null){
      this.head = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }

    console.log("\nHead ", this.head.data, " Tail ", this.tail.data, "\n");
  }

}

let newDList = new DList ();

newDList.append(19);
newDList.append(55);
newDList.append(8);
newDList.append(13);
newDList.append(10);

newDList.print();

console.log(newDList);