export class Node {
    constructor(value, next = null, previus = null){
        this.value = value
        this.previus = previus
        this.next = next
    }
}

export class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }
     
    append(value) {
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode
        }else {
           this.tail.next = newNode 
           newNode.previus = this.tail;
        }

        this.tail = newNode
    }

    traverse(callback){
        let currentNode = this.head;

        while(currentNode != null){
            callback(currentNode);

            currentNode = currentNode.next;
        }
    }
}
