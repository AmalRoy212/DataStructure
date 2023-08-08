class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class List {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;

  }

  //adding new node on the beginning of the list

  addHead (data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //adding new node to the end of the list 

  addTail (data){
    let newNode = new Node(data);
    this.tail.next = newNode;
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

  //optim function
  converArray(values) {
    const length = values.length;
    for (let i = 0; i < length; i++) {
      this.append(values[i]);
    }
  }

  //manual function
  converToArray(values){
    let length = values.length;

    for (let index = 0; index < length; index++) {
      
      let newNode = new Node(values[index]);

      if(this.head === null){
        this.head = newNode;
      }else{
        this.tail.next = newNode;
      }
      this.tail = newNode

    }

  }

}

let newList = new List ();

let numbers = [90,25,101,50,10];

// newList.converArray(numbers);
newList.converToArray(numbers);

newList.print();

newList.addHead(75);
newList.addTail(1000);

newList.print();