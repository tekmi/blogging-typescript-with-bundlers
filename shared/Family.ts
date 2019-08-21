import Named from "./Named";

export * from "./Child";
export * from "./Parent";

export default class Family {
    protected members: Named[] = [];

    addMember(member: Named) {
        this.members.push(member);
    }

    printNames(): void {
        this.members.forEach(member => console.log(`${member.constructor.name}: ${member.getName()}`));
    }
}
