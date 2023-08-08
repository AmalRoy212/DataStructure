class Node {
  constructor(data) {
    this.data = data;
    this.next = null
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

    console.log("\nHead ", this.head.data, " Tail ", this.tail.data, "\n");
  }

  sort(){
    let current = this.head;

    while(current){
      let newCurrent = current.next;
      while(newCurrent){
        if(current.data < newCurrent.data){
          let temp = newCurrent.data;
          newCurrent.data = current.data;
          current.data = temp;
        }
        newCurrent = newCurrent.next;
      }
      current = current.next;
    }

  }

}

let newList  = new List ();

newList.append(10);
newList.append(20);
newList.append(30);
newList.append(40);
newList.append(50);

newList.print();

newList.sort();

newList.print();
