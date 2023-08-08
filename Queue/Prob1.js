class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class Queue{

  constructor(){
    this.front = null;
    this.rear = null;
  }

  deQueue(data){
    let newNode = new Node (data);

    if(this.front === null){
      this.front = newNode;
    }else{
      this.rear.next = newNode;
    }
    this.rear = newNode;
  }

  enQueue(){
    this.front = this.front.next;
  }

  print(){
    let current = this.front;

    console.log("\nFront ",this.front.data," Rear ",this.rear.data,"\n");
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

}

let newQueue = new Queue();

newQueue.deQueue(10);
newQueue.deQueue(20);
newQueue.deQueue(30);
newQueue.deQueue(40);
newQueue.deQueue(50);
newQueue.print();
newQueue.enQueue();
newQueue.print();