//async võtab tegevused järjekorda ja ei viska neid tagasi, kui viskaks tegevused tagasi, siis paljud käsud ei realiseeruks
//töötleb neid järjekorra alusel

async function getUser(id:string) {
    return Promise.resolve({name: "sdf"})
}

type Y = Awaited<ReturnType<typeof getUser>>