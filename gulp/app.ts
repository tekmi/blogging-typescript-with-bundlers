import Family, {Child, Parent} from "../shared/Family";

const child1 = new Child('Marc');
const parent1 = new Parent('Adam');
const parent2 = new Parent('Yanjiao');

const myFamily = new Family();
myFamily.addMember(child1);
myFamily.addMember(parent1);
myFamily.addMember(parent2);

myFamily.printNames();
