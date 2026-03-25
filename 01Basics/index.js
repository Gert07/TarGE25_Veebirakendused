//*harjutus 1 
//*Soovin näidata ainult name ja age, aga võetakse kogu objekti sisu kuna kasutatakse User type
function renderUserdetails(user) {
    console.log(user.name, user.age);
}
function renderUserdetails1(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "ads",
    name: "Kyle",
    age: 47,
    address: {
        street: "string",
        city: "London"
    }
};
renderUserdetails(user);
renderUserdetails1({ name: "Nipitiri", age: 123 });
