export const productos = [
    {   id: 1, 
        foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,
        categoria: 'termeras', 
        name: "Termera Rigida", 
        price: 8700, 
        stock: 3,
        description: "Descripción del producto"
    },

    {   id: 2,
        foto:'https://i.pinimg.com/originals/d8/78/f6/d878f620f9c3c470a051831bfb5ffe23.png' ,
        categoria: 'matesYBombillas', 
        name: "Mate Imperial", 
        price: 6700, 
        stock: 6,
        description: "Descripción del producto"
    },

    {   id: 3,
        foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,
        categoria: 'yerberosYAzucareros',
        name: "Yerbero de Cuero", 
        price: 3400, 
        stock: 7,
        description: "Descripción del producto"
    },

    {   id: 4,
        foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,
        categoria: 'termeras',
        name: "Termera Mochila",
        price: 9000, 
        stock: 2,
        description: "Descripción del producto"
    },

    {   id: 5,
        foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,
        categoria: 'yerberosYAzucareros', 
        name: "Azucarero de Cuero", 
        price: 2800, 
        stock: 16,
        description: "Descripción del producto"
    },

    {   id: 6,
        foto:'https://i.pinimg.com/originals/d8/78/f6/d878f620f9c3c470a051831bfb5ffe23.png' ,
        categoria: 'matesYBombillas', 
        name: "Bombilla Pico de Loro", 
        price: 1200, 
        stock: 12,
        description: "Descripción del producto"
    },

    {   id: 7,
        foto:'https://i.pinimg.com/originals/d8/78/f6/d878f620f9c3c470a051831bfb5ffe23.png' ,
        categoria: 'matesYBombillas',
        name: "Mate Uruguayo", 
        price: 2300, 
        stock: 4,
        description: "Descripción del producto"
    }
]

export const getItem = new Promise ((resolve, reject) => {
    let url = "acevedo.com";
    if (url === "acevedo.com") {
        setTimeout( () => {
            resolve (productos)
        }, 200);
    }else {
        reject("Error 404");
    };    
})


