enum PAISES {
    BOL = "bolivia",
    CHI = "chile",
    ARG = "argentina",
    VEN = "venezuela"
}

type TPAISES = PAISES;

const verificar = (pais: TPAISES) => {
    if (pais === PAISES.BOL) {
        console.log("Es boliviano");
    } else if (pais === PAISES.CHI) {
        console.log("Es chileno");
    } else if (pais === PAISES.ARG) {
        console.log("Es argentino");
    } else if (pais === PAISES.VEN) {
        console.log("Es venezuela");
    }
}

verificar(PAISES.VEN);