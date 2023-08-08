class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(data){
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    }else{
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

  sort(){
    let current = this.head;

    while(current){
      let newCurrent = current.next;
      while(newCurrent){
        if(current.data > newCurrent.data){
          let temp = current.data;
          current.data = newCurrent.data;
          newCurrent.data = temp;
        }
        newCurrent = newCurrent.next;
      }
      current = current.next;
    }
  }

  reverseHelper(node){
    if(node === null) return
    this.reverseHelper(node.next);
    console.log(node.data);
  }

  printReverse(){
    this.reverseHelper(this.head);
  }
}

let newList = new List ()

newList.append(80);
newList.append(40);
newList.append(30);
newList.append(20);
newList.append(10);

newList.print();

newList.sort();

newList.print();
newList.printReverse()
