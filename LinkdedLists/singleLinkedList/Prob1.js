class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor (){
    this.head = null;
    this.tail = null;
  }

  addNodes (data){
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

  insertAfter(position, data){
    
    let newNode = new Node(data);

    let current = this.head;

    if(this.tail.data === position){
      this.tail.next = newNode;
      this.tail = newNode;
      return
    }

    while(current.data !== position){
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  insertSides(position, leftData, rightData){
    let newLeftNode = new Node(leftData);
    let newRightNode = new Node(rightData);

    let current = this.head;

    if(current.data === position){
      newLeftNode.next = current;
      newRightNode.next = current.next;
      current.next = newRightNode;
      this.head = newLeftNode;
      return
    }

    if(this.tail.data === position){
      newLeftNode.next = this.tail;
      this.tail.next = newRightNode;
      this.tail = newRightNode;
      return
    }

    while(current.next.data !== position){
      current = current.next;
    }

    newLeftNode.next = current.next;
    current.next = newLeftNode;
    newRightNode.next = newLeftNode.next.next;
    newLeftNode.next.next = newRightNode;

  }
}

let newList = new List();

newList.addNodes(10);
newList.addNodes(20);
newList.addNodes(30);
newList.addNodes(40);
newList.addNodes(50);

newList.print();
console.log('\n');
newList.insertAfter(10, 35);
console.log(newList.head.data,"Head******");
console.log(newList.tail.data,"tail******");

newList.print();
console.log('\n');

newList.insertSides(10,25,45);
console.log(newList.head.data, "Head******");
console.log(newList.tail.data, "tail******");
newList.print();


// console.log(newList);