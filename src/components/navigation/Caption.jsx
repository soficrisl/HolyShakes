export default function Caption(props) {
    return (
        <div className="flex items-center justify-center">
            <div className={"bg-gray-300 rounded-full p-2 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-8 md:pr-8 lg:pl-10 lg:pr-10  w-[250px] sm:w-[400px] md:w-[600px] lg:w-[700px] flex"+props.config}>
                <div >
                    <p>{props.caption}</p>
                    <p className={"font-bold " + props.configtext}>{props.name}</p>
                </div>
            </div>
        </div>
    )

}