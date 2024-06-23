export default function Clients() {
    return (
        <div className=" font-montserrat flex flex-col justify-center items-center w-full">
            <p className="tracking-widest text-xl self-center">CLIENTES</p>
            <h2 className="font-bold text-4xl self-center  m-4"> Lee lo que dicen otros Holly Shakers </h2>
            <section className="m-4">
                <div className="flex relative m-7">
                    <img className="w-32 relative bottom-8 left-12" src="../src/assets/Camila.png" alt="" />
                    <div>
                        <div className="bg-gray-200 rounded-full p-2 pl-16 pr-8 flex">
                            <div>
                                <p>What if Holly Shakes is actually what’s Holy? #guiltyassin</p>
                                <p className="font-bold">CAMILA FERMOSO</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex relative m-7 pl-24">
                    <div>
                        <div className="bg-gray-200 rounded-full p-2 pl-32 pr-24 flex">
                            <div className="flex flex-col justify-end items-end">
                                <p>Soy el mas fan de Holly Shakes 20/20</p>
                                <p className="font-bold ">EL MEJOR PROFE UNIMET</p>
                            </div>
                        </div>
                    </div>
                    <img className="w-32 relative bottom-8 transform -translate-x-1/2" src="../src/assets/Franklin.png" alt="" />
                </div>
                <div className="flex relative m-7">
                    <img className="w-32 relative bottom-8 left-12" src="../src/assets/Cristian.png" alt="" />
                    <div>
                        <div className="bg-gray-200 rounded-full p-2 pl-16 pr-32 flex">
                            <div>
                                <p>Holly Shakes es buenísimo, mejor imposible!!</p>
                                <p className="font-bold">CRISTIAN GOUVEIA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )



}