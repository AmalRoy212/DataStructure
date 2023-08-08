class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(data){
    let newNode = new Node (data);

    if(this.top){
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop(){
    this.top = this.top.next;
  }

  print() {
    let current = this.top;
    console.log("\nTop ", this.top.data, "\n");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  removeMid(){
    let current = this.top;
    let index = 0;

    while (current) {
      index ++
      current = current.next;
    }

    current = this.top
    let mid = Math.floor(index/2);

    while(mid > 1){
      mid--;
      current = current.next;
    }

    current.next = current.next.next;

  }
}

let newStack = new Stack()

newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.push(50);
newStack.print();

newStack.removeMid();
newStack.print();
