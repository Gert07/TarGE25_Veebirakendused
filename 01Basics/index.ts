//*harjutus 1 

type User = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

//*Soovin näidata ainult name ja age, aga võetakse kogu objekti sisu kuna kasutatakse User type

function renderUserdetails(user: User) {
    console.log(user.name, user.age)
}

function renderUserdetails1(user: Pick<User, "name" | "age">){
    console.log(user.name, user.age)
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

renderUserdetails(user)
renderUserdetails1({name: "Nipitiri", age: 123})
