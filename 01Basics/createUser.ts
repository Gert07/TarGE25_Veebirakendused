
type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}
const user: User = {
    id: "ads",
    name: "Kyle",
    age: 47,
    address: {
        street: "string",
        city: "London"
    }
}

//omit kasutamine tähendab property eemaldamist User Typeist
function createUser(user: Omit<User, "id">) {
    console.log(user.address, user.name, user.age)
}

function updateUser(user: Partial<User>) {
    
}

createUser({name: "Ironman", age: 567, address: {street: "asd", city: "asdcity"}})