import { useState } from "react";
import { Count } from './../../components/ItemCount/itemCount';



const CountContainer = ({ initial, stock }) => {

        const [count, setCount] = useState(initial);

        const add =() => {
            if (count > stock) {
                alert ("SUperaste el stock)");
            } else {
                setCount(count + 1);
            }
        };

        const sub =() => {           
            setCount (count - 1);            
        };

        const onAdd =() => {           
            alert (`Agregaste ${count} al carrito`);           
        };

        return (
            <>
                <Count min={sub} max={add} onAdd={onAdd} count={count} />
            </>
            );
};

export default CountContainer;