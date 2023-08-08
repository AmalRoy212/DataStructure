class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    let newNode = new Node(data);

    if(this.top){
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop(){
    this.top = this.top.next;
  }

  print(){
    let current = this.top;
    console.log("\nTop ",this.top.data,"\n");
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

let newStack = new Stack ()

newStack.push(10);
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.push(50);
newStack.print();
newStack.pop();
newStack.print();

