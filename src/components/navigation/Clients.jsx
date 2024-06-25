import Caption from "./Caption"

export default function Clients() {
    return (
        <div className="font-montserrat text-xs sm:text-sm md:text-lg lg:text-xl flex flex-col justify-center items-center w-full">
            <h2 className='text-center font-bold self tracking-widest text-2xl xl:text-4xl text-orangehs'>CLIENTES</h2>
            <h2 className="font-bold text-4xl self-center  m-4"> Lee lo que dicen otros Holly Shakers </h2>
            <section className="m-4 flex  flex-col justify-center items-center">
                <div className="flex relative m-7">
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative" src="../src/assets/Camila.png" alt="" />
                    <Caption name="CAMILA FERMOSO" caption="What if Holly Shakes is actually what’s Holy? #guiltyassin"></Caption>
                </div>
                <div className="flex relative m-7">
                    <Caption name="EL MEJOR PROFE UNIMET" caption="Soy el mas fan de Holly Shakes 20/20" config="flex-col flex justify-end" configtext="text-right"></Caption>
                    <img className="w-16 h-16 sm:w-20 sm:h-20  md:w-28 md:h-28 lg:w-32 lg:h-32 relative" src="../src/assets/Franklin.png" alt="" />
                </div>
                <div className="flex relative m-7">
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 relative " src="../src/assets/Cristian.png" alt="" />
                    <Caption name="CRISTIAN GOUVEIA" caption="Holly Shakes es buenísimo, mejor imposible!!"></Caption>
                </div>
            </section>
        </div>
    )



}