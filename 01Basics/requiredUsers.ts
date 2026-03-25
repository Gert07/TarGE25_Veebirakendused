type UserRequired = {
    //võib panna iga property ette readonly = ei saa muuta andmetüüpi
    //readonly id:string
    //readonly prop1: string
    id: string
    name: string
    age: number
    //? - tähendab valikulist muutujat
    address?: {
        street: string
        city: string
    }
}

//kui hoiab T tähe peal hiirt, siis näed, et propertid on readonly-ks muudetud

type T = Readonly<UserRequired>

//oletame, et tahame, et see property oleks kindalsti kasutatud
//vastupidine partialile
function createUserWithAddress(user: Required<UserRequired>){}

//nn külmutab käik objekti sisse ja ei saa kasutada
//Object.freeze()