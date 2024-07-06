export default function UserCompleted({order}) {
    // const items = [
    //     { name: 'Item 1', quantity: 2, price: 10.00 },
    //     { name: 'Item 2', quantity: 1, price: 5.00 },
    //     // Add more items as needed
    // ];


    return (
        <>
            <div className="bg-creamhs p-2 gap-x-2 flex flex-grow w-[350px] sm:w-[500px] lg:w-[800px] min-w-[300px] max-w-[800px] rounded-lg ">
                
                <div className="p-2 flex flex-col items-center justify-center">
                    <img className="h-20 w-20 sm:h-28 sm:w-28 lg:h-40 lg:w-40 sm:max-h-48 " src="./src/assets/usuarioPedido.png" alt="" />
                    <h2 className="">{order.nombre.toUpperCase()}</h2>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center gap-y-4">
                    <div>
                        <p>{"FECHA "+ order.fecha}</p>
                        <h2 className=" font-extrabold">{"PEDIDO " + order.id_pedido}</h2>
                    </div>
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
                    <div className="flex w-full justify-between">
                        <p>{"Subtotal"}</p>
                        <p>{"REF "+ order.subtotal}</p>
                    </div>
                    <div className="flex w-full justify-between">
                        <p>{"Impuestos"}</p>
                        <p>{"REF "+ order.impuestos}</p>
                    </div>
                    <div className="bg-custom-yellow flex w-full font-bold justify-between">
                        <p>{"Total"}</p>
                        <p>{"REF "+ order.total}</p>                      
                    </div>
                </div>
            </div>
            </>
    )
}