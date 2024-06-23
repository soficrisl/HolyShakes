import TextUserInput from '../components/navigation/TextUserInput'
import OptionUserInput from '../components/navigation/OptionUserInput'
import Button from '../components/navigation/Button'
import Footer from '../components/navigation/Footer'

export default function Feedback() {
    return(
        <>
        <main className='bg-creamhs p-2 xl:p-8 font-montserrat  text-xs xl:text-lg'>
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

            ]} labeltext="Puntua nuestra página web " id="puntuacion"></OptionUserInput>
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