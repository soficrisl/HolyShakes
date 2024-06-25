import TextUserInput from '../components/navigation/TextUserInput'
import OptionUserInput from '../components/navigation/OptionUserInput'
import Button from '../components/navigation/Button'
import Footer from '../components/navigation/Footer'
import Navbar from '../components/navigation/Navbar'

export default function Feedback() {
    return(
        <>
        <Navbar></Navbar>
        <main className='bg-gradient-circle p-2 xl:p-8 font-montserrat  text-xs sm:text-sm md:text-lg lg:text-xl'>
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

            ]} labeltext="Puntúa nuestra página web " id="puntuacion"></OptionUserInput>
            <OptionUserInput options={[
                { value: '1', label: 'Recomendación' },
                { value: '2', label: 'Reclamo' },
            ]} labeltext="Tipo de Feedback" id="tipo"></OptionUserInput>
            <TextUserInput place_holder="Comentario" labeltext="Ingresa tu comentario" ></TextUserInput>
            <Button text="Enviar"></Button>
        </main>
        <Footer></Footer>
        
        </>

    )
}