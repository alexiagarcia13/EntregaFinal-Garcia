import { useEffect } from 'react'
import '../App.css'

const MOCK_DATA = [
    {
        id: 1,
        nombre: "Texana Feyre",
        descripción: "Texana caña media",
        precio: $6950,
        img: "../img/venta/texanas/feyre_choco.jpeg"
    },
    {
        id: 2,
        nombre: "Texas",
        descripción: "Texana color hielo, media",
        precio: $6950,
        img: "../img/venta/texanas/texas_hielo.jpeg"
    },
    {
        id: 3,
        nombre: "Texas cortas",
        descripción: "Texana corta",
        precio: 5500,
        img: "../img/venta/texanas/texascortas_blancas.jpeg"
    },
    {
        id: 4,
        nombre: "Texana Serena",
        descripción: "Texana media color camel",
        precio: $6950,
        img: "../img/venta/texanas/tex_serena_camel.jpeg"
    }
]

const pedirDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (MOCK_DATA)         
        }, 5000)
     })
} 

const ItemListContainer = () => {

    const [productos, setProcutos] = useState ([])
    console.log(productos)  


    useEffect (() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return(
        <div className="list_container">
            <h2>Las mejores botas del condado</h2>
            <hr />

            {
                productos.map((prod) => (
                    <div>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre} />
                        <p>{prod.descripcion}</p>
                        <p>Precio: ${prod.precio}</p>
                ))
           }

        </div>
    )
        
}

export default ItemListContainer