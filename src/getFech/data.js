export const productos = [
    { id: 1,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Termeras', name: "Termera Rigida", price: "$8700" },
    { id: 2,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Mates', name: "Mate Imperial", price: "$6700" },
    { id: 3,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Yerberos y Azucareros', name: "Yerbero de Cuero", price: "$3400" },
    { id: 4,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Termeras', name: "Termera Mochila", price: "$9000" },
    { id: 5,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Yerberos y Azucareros', name: "Azucarero de Cuero", price: "$2800" },
    { id: 6,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Bombillas', name: "Bombilla Pico de Loro", price: "$1200" },
    { id: 7,  foto:'https://images.vexels.com/media/users/3/212928/isolated/preview/6c3b4f2bdc20b6cdc04e609ba4d77273-dibujado-a-mano-copa-de-mate-de-uruguay.png' ,categoria: 'Mates', name: "Mate Uruguayo", price: "$2300" }
]

export const data = new Promise ((resolve, reject) => {
    let url = "acevedo.com";
    if (url === "acevedo.com") {
        setTimeout( () => {
            resolve (productos)
        }, 200);
    }else {
        reject("Error 404");
    };    
})
