export default function Button( props) {
    return (
        <div className=" justify-center m-4 xl:m-8 text-center">
            <button
                className="bg-orangehs w-32 lg:w-[320px] hover:bg-orange-500 text-white font-bold py-2 rounded"
                onClick={props.handleSubmit}
            >
                {props.text}
            </button>
        </div>
    )


}