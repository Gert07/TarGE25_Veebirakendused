//*Ühendab htmlis oleva id parent constantiga
//* ja kõik class-iga child-check olevad elemendid children-iks
const parentCheckbox = document.getElementById("parentCheckbox");
const children = document.querySelectorAll(".child-check");

//*funktsioon, mis kontrollib, mitu child-checki on checked
//* ja vastavalt sellele muudab parent-checki checked ja indeterminate omadusi
function updateParent() {
    //*Loeme mitu child-checki on checked
    const checked = [...children].filter(c => c.checked).length;
    //*=== võrdub väärtuse ja tüübiga
    //*==  kas kaks muutujat on väärtuselt võrdsed
    //*=See on lihtsalt omistamine
    if (checked === 0) {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = false;
    } else if (checked === children.length) {
        parentCheckbox.checked = true;
        parentCheckbox.indeterminate = false;
    } else {
        parentCheckbox.checked = false;
        parentCheckbox.indeterminate = true;
    }
}

//*Lisa event listenerid kõigile child-check elementidele,
//* mis kutsuvad updateParent funktsiooni
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");

parentCheckbox.addEventListener("change", function () {
    children.forEach(child => child.checked = this.checked);
});

children.forEach(child => {
    child.addEventListener("change", updateParent);
});
