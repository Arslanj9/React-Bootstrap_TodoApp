import { todoItemContext } from "../store/TodoItemContext";
import { useContext } from "react";

const WelcomeMsge = () => {

    const {allItems} = useContext(todoItemContext)

    return (
        <>
            {  allItems.length === 0 && <h3 className="text-center m-3 text-uppercase text-success">Welcome to the App</h3>}
        </>
    )
}

export default WelcomeMsge;