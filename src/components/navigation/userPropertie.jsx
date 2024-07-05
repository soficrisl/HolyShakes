import { useState } from "react";


const UserProperties = (props) => {
    const place_holder = props.place_holder;
    const category = props.category; 
    const [edit, editable] = useState(false);
    const editPropertie = () => {
        if (edit) {
            editable(false)
        }else {
            editable(true)
        }

    }

    return (
        <div className="flex flex-col font-montserrat w-full "> 
            <h3 className="font-bold"> {category} </h3>
            <div className="flex gap-2"> 
            {edit ? <input placeholder={place_holder} className="block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" /> : <input disabled placeholder={place_holder} className=" block w-full p-2 border border-zinc-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white" />}
            <button disabled className = "text-3xl hover:text-4xl"> 
                <ion-icon name="create-outline"></ion-icon>
            </button>
            </div>
        </div>
    ); 
}


export default UserProperties; 