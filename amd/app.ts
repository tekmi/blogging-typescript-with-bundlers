import Family, {Child, Parent} from "../shared/Family";

const child1 = new Child('Chris');
const child2 = new Child('Anna');
const parent1 = new Parent('Elizabeth');

const myFamily = new Family();
myFamily.addMember(child1);
myFamily.addMember(child2);
myFamily.addMember(parent1);

myFamily.printNames();
