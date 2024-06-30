export default function Insight(props) {
    return(
        <div className='bg-white rounded-2xl p-2 m-2'>
            <p className=" underline font-bold">{props.title}</p>
            <div className="flex justify-between items-center">
            <div>
                <p className="flex break-words">{props.message}</p>
            </div>
            <div>
                <div className="flex items-center justify-center border-4 border-orangehs rounded-full h-10 w-10 lg:h-20 lg:w-20 m-1"> {/* Adjust h-20 and w-20 to change size */}
                <p className="text-orangehs font-semibold">{props.value} </p> 
                </div>

            </div>
            </div>
        </div>

    )

}

