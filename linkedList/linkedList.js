class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
       // 5 8 12
    const newNode = new Node(value);
   
    if (!this.head) {  
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeNodes(x) {
    // Handle nodes at the head that need to be removed
    while (this.head && this.head.value > x) {
      this.head = this.head.next;
    }

    // Remove nodes beyond the head  4 10  5 7 12 5
    let current = this.head;
    while (current && current.next) {
      if (current.next.value > x) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }


  printList() {
    //    1 5 8 
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' '));
  }
}


const ll = new LinkedList();
ll.addNode(10);
ll.addNode(5);
ll.addNode(12);
ll.addNode(7);

console.log("=========Original List==========");
ll.printList();

ll.removeNodes(7);

console.log("remove values greater than 7 ===>");
ll.printList();


