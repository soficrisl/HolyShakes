
function Register() {
  return (
    <>
    <div className="flex place-content-evenly flex-col items-center gap-4"> 
    <h2 className = "text-center text-4xl p-8 mt-4 uppercase tracking-widest text-orangehs"> Registrate </h2>
    <div className="  m-6 pl-36 pr-36 pt-4 pb-4 self-center place-content-center  bg-yellow-  border bg-slate-200 rounded -md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative flex w-96"> 
            <div> 
                <div className="p-2 m-1"> 
                    <div className="font-bold"> Nombre </div>
                    <input name = "Fname" className= 'input' placeholder="Enter your first name"/> 
                </div>
                <div className="p-2 m-1"> 
                    <div className="font-bold"> Apellido </div>
                    <input name = "Lname"  placeholder="Enter your last name"/> 
                </div>
                <div className="p-2 m-1">
                <div className="font-bold">  Telefono </div>
                    <input name = "phone" className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your phone number"/> 
                </div>
                <div className="p-2 m-1"> 
                <div className="font-bold">  Correo </div>
                    <input type= "email" name = "mail"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter your email"/> 
                </div>
                <div className="p-2 m-1"> 
                <div className="font-bold">  Contraseña </div>
                    <input name ="password"  className= 'w-full p-1 font-light border-1 border-solid border-gray-300 rounded border' placeholder="Enter password"/> 
                </div>
                <div className="p-2 m-1"> 
                <div className="font-bold">  Confirmar Contraseña </div>
                    <input name ="checkpassword" className= 'border-1 border-solid border-gray-300 rounded border' /> 
                </div>
                <div className="p-2 m-2"> 
                    <button> Registrar</button>
                </div>
                <div className="p-2 m-2"> 
                    <button>Continuar con Google</button>
                </div>
            </div>
        </div>
    </div>

    </>
    
)

}

export default Register