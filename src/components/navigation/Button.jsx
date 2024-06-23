export default function Button( props) {
    return (
        <div className=" flex flex-row justify-center m-4 xl:m-8">
            <button
                className="bg-orangehs hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
                //onClick={props}
            >
                {props.text}
            </button>
        </div>
    )


}