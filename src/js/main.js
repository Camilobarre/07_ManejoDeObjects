const coder = {
    id: "c001",
    name: "javier",
    lastName: "combita",
    birthDate: new Date("1998-04-23 14:00:00"),
    identificationNumber: "1026155751",
    location: {
        country: "Colombia",
        city: "medellin",
        address: "Cl 14 # 58-43",
    },
    email: "jcomtech@gmail.com",
    clan: "DELL",
    phoneNumber: "3015468063",
    codebtor: "Lina Combita",
    workingDay: "completa",
    saludar: function () {
        return `Hola Mundo, soy ${this.name}`;
    },
    showFullName: function () {
        console.log(this.name, this.lastName);
    }
}

console.log(coder);

console.groupCollapsed("Show Data");

console.log(coder.name, coder.lastName);
console.log(coder["name"], coder["lastName"]);
console.log(coder.name, coder["lastName"]);
console.log(coder.saludar())
coder.showFullName()

console.groupEnd();

console.groupCollapsed("Add Data");

coder.typeBlood = "A+"
coder["genre"] = "masculine"

coder.emergency = {}
coder.emergency.contactName = "maria lopez"
coder.emergency["backupContactNumber"] = "123456789"

Object.defineProperty(coder, "teamLeader", {
    value: "Robinson",
    writable: true, //permite que la propiedad sea actualizada
    enumerable: true, //permite que la propiedad sea visible
    configurable: false,//permite que la propiedad sea eliminada
})

delete coder.codebtor
coder.codebtor = undefined

console.log("");
console.log(coder);

console.groupEnd();

console.groupCollapsed("Update Data")

coder.id = "T001"
coder["phoneNumber"] = "11122333456"
console.log(coder);

console.groupEnd();

console.groupCollapsed("Sum Objects")

const objetoA = {
    a: "alpha",
    b: "bravo",
    c: "charlie"
}

const objetoB = {
    d: "delta",
    e: "echo",
    f: "foxrot"
}

console.info(objetoA);
console.info(objetoB);

Object.assign(objetoA, objetoB)

console.info(objetoA);
console.info(objetoB);

const objetoC = {
    a: "alpha",
    b: "bravo",
    c: "charlie"
}

const objetoD = {
    d: "delta",
    e: "echo",
    f: "foxrot"
}

const objetoResultado = { ...objetoC, ...objetoD }
console.info(objetoC);
console.info(objetoD);
console.info(objetoResultado);

console.groupEnd();

console.groupCollapsed("Destructuring")

const person = {
    nameCoder: "javier",
    lastNameCoder: "combita",
    birthDateCoder: new Date("1998-04-23 14:00:00"),
    identificationNumberCoder: "109624738486",
    location: {
        countryCoder: "colombia",
        state: "antioquia",
        city: "medellin",
        address: "cl 14 # 58-43",
    },
    emailCoder: "jcomte@outlook.com"
}

//Forma manual
// const name = person.nameCoder
// const documentId=person.identificationNumberCoder
// const email = person.emailCoder

//Forma dinámica
let {
    nameCoder: name,
    identificationNumberCoder: documentId,
    emailCoder: email
} = person

console.log(name)
console.log(documentId)
console.log(email)

// const{birthDateCoder,lastNameCoder} =person

// const birthDateCoder=person.birthDateCoder

let {
    nameCoder: nombreCoder,
    lastNameCoder: apellidoCoder,
    location: {
        address: direccion
    }
} = person

console.log(nombreCoder);
console.log(location["address"]);
console.log(apellidoCoder);

console.groupEnd()

console.groupCollapsed("Ejercicio Mascota")

let mascota = {
    nombre: "Manchitas",
    edad: "5 años",
    peso: "30 kg",
    raza: "Canino",
    especie: "Dalmata",
    propietario: {
        nombrePropietario: "Camilo",
        apellidoPropietario: "Barreneche",
        tipoDocumento: "CC",
        documento: "1026155751",
    },
    infoMascota: function() {
        console.log(`${this.nombre}`)
    }
}

let {
    nombre: nombreMascota,
    edad: edadMascota
} = mascota

console.log(`El nombre de la mascota es ${nombreMascota} y tiene ${edadMascota}.`);

console.log(`El nombre del propietario es ${mascota.propietario.nombrePropietario} ${mascota.propietario.apellidoPropietario} con cédula ${mascota.propietario.tipoDocumento} ${mascota.propietario.documento}.`);

mascota.infoMascota()

console.groupEnd()