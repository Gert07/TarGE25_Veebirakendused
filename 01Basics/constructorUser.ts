class UserCode{
    name: string

    constructor(name: string){
        this.name = name;
    }
    //teha konstruktor
}
const user = new UserCode("Siim");

console.log(user.name);

type G = ConstructorParameters()