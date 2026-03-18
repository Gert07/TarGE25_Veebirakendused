//*harjutus 1 
//*Soovin näidata ainult name ja age, aga võetakse kogu objekti sisu kuna kasutatakse User type
function renderUserdetails(user) {
    console.log(user.name, user.age);
}
var user = {
    id: "ads",
    name: "Kyle",
    age: 65657,
    address: {
        street: "string",
        city: "London"
    }
};
renderUserdetails(user);
