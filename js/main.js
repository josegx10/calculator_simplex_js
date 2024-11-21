import { LinkedList } from "./LinkedList.js";

const printNode = (node) => console.log(node.value);
const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

list.traverse(printNode);
