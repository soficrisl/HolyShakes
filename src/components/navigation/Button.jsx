export default function Button( props) {
    return (
        <div className=" flex flex-row justify-center m-4 xl:m-8 text-center">
            <button
                className="bg-orangehs w-32 lg:w-1/6 hover:bg-orange-500 text-white font-bold py-2 rounded"
                //onClick={props}
            >
                {props.text}
            </button>
        </div>
    )


}