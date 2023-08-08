class Node{
  constructor(data){
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class List{

  constructor(){
    this.head = null;
    this.tail = null
  }

  append(data){
    let newNode = new Node(data);

    if(this.head === null){
      this.head = newNode;
    }else{
      newNode.prev = this.tail
      this.tail.next = newNode;
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

  reverse(){
    let current = this.tail;

    while(current){
      
    }
  }

}