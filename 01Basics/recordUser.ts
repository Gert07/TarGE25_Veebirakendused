type RequiredUser = {
    id: string
    name: string
    age: number
    address: {
        street: string
        city: string
    }
}

//antud juhul on string key ja RequiredUser on väärtus (tuple v dictionary)
type A = Record<string, RequiredUser>

//saab kasutada ka union type
type C = Record<"admin" | "user", {test: string}>

const a:C = {
    admin: {test: "asd"},
    user: {test: "fgh"}
}

//võib kasutada sellist varianti
//PropertyKey tähendab, et kasutab väärtust, mida tahad selle type sisse panna
type B = Record<PropertyKey, {test: string}>