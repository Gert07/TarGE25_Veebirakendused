var user = {
    id: "ads",
    name: "Kyle",
    age: 47,
    address: {
        street: "string",
        city: "London"
    }
};
//omit kasutamine tähendab property eemaldamist User Typeist
function createUser(user) {
    console.log(user.address, user.name, user.age);
}
createUser({ name: "Ironman", age: 567, address: { street: "asd", city: "asdcity" } });
