import TextUserInput from '../components/navigation/TextUserInput'
import OptionUserInput from '../components/navigation/OptionUserInput'
import Button from '../components/navigation/Button'
import Footer from '../components/navigation/Footer'
import Navbar from '../components/navigation/Navbar'
import React, { useEffect, useState } from "react";
import { createComment } from '../controllers/feedback'

export default function Feedback() {
    const [feedback, setFeedback] = useState({
        puntuacion: '',
        tipo: '',
        comentario: '',
        id_usuario: ''
      });
    /**
     * falta agregar el id del usuario hay un problema con el firebase
     */
      const handleSubmit = async () => {
        const comment = await createComment(feedback);
        
      };
    
    const handleChange = (event) => {
        setFeedback((feedback) => ({
          ...feedback,
          [event.target.name]: event.target.value,
        }));
      };

    return(
        <>
        <Navbar></Navbar>
        <main className='bg-gradient-circle h-screen flex-col flex p-2 justify-center xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>

            <h2 className='text-center text-2xl xl:text-4xl font-bold text-orangehs'>Feedback</h2>
            <OptionUserInput options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7', label: '7' },
                { value: '8', label: '8' },
                { value: '9', label: '9' },
                { value: '10', label: '10' }

            ]} labeltext="Puntua nuestra página web " id="1" name="puntuacion" handleChange={handleChange}></OptionUserInput>
            <OptionUserInput options={[
                { value: 'Recomendación', label: 'Recomendación' },
                { value: 'Reclamo', label: 'Reclamo' },
            ]} labeltext="Tipo de Feedback" id="2" name="tipo" handleChange={handleChange} ></OptionUserInput>
            <TextUserInput name="comentario" place_holder="Comentario" labeltext="Ingresa tu comentario" handleChange={handleChange} value={feedback.comentario}></TextUserInput>
            <Button text="Enviar" handleSubmit={handleSubmit}></Button>
        </main>
        <Footer></Footer>
        
        </>

    )
}