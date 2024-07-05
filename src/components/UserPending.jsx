import Button from "./navigation/Button";


export default function UserPending({order}) {
    // const items = [
    //     { name: 'Item 1', quantity: 2, price: 10.00 },
    //     { name: 'Item 2', quantity: 1, price: 5.00 },
    //     // Add more items as needed
    // ];
    {/* 
        
        [{id: 'G7f8KK5tYJ1turpCcygM', impuesto: 0, total: 11, id_usuario: '', descuento: 0, productos:[
        {TiTq4TuBKjXbtM9xo7sc: 4, Xzo8yVv75pUdJsSRTfs5: 2}], …}, subtotal:10, total: 10, fecha:"2024-01-01"...]

        
        [{id: 'TiTq4TuBKjXbtM9xo7sc', descripcion: 'Bebida de Cola', subcategoria: '', precio: 1, categoria: 'Bebida', …}...]

        [{id: 'KhBqv6O18adbjvlTEgq8PvdTFUL2', phone: '04242080590', email: 'juansito@correo.unimet.edu.ve', fname: 'Juan', rol: 'Cliente', …}...]
        
        [{  nombre: "Andrés Rangel",
            productos: [{name: "Hamburguesa", quantity: 1, price: 10.00},...]
            id_pedido: "G7f8KK5tYJ1turpCcygM"
            subtotal: 10.00
            impuestos: 0
            fecha: "2024-01-01"
        }...]
        
        */}
    return(<>
        <div className="bg-creamhs p-4 flex flex-grow w-[350px] sm:w-[500px] lg:w-[800px] min-w-[300px] max-w-[800px] rounded-lg ">
            
            <div className="p-2 flex flex-col items-center justify-center">
                <img className="h-20 w-20 sm:h-28 sm:w-28 lg:h-40 lg:w-40 sm:max-h-48 " src="./src/assets/usuarioPedido.png" alt="" />
                <h2 className="">{order.nombre.toUpperCase()}</h2>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-y-4">
                <h2 className=" font-extrabold">{"PEDIDO " +order.id_pedido}</h2>
                <hr style={{borderTop: "2px solid black", width: "100%"}} />
                {/* Map through items and display their details */}
                {order.productos.map((item, index) => (
                    <div className="flex w-full justify-between" key={index}>
                        <p >{item.name}</p>
                        <p >X{item.quantity}</p>
                        <p >{"REF "+item.price.toFixed(2)}</p>
                    </div>
                ))}
                <hr style={{borderTop: "2px solid black", width: "100%"}} />
                {/* <Button text="ENTREGADO"></Button> */}
            </div>
        </div>
                </>
    )

}