enum PrimeIcons { 
    CIRCLE_TIMES = "pi pi-circle-times", 
    TRASH = "pi pi-trash",
}

enum FontAwesomeIcons { 
    ACORN = "fad fa-acorn",
}

let icons = Object.assign({}, FontAwesomeIcons, PrimeIcons);

icons.TRASH;
icons.ACORN;
