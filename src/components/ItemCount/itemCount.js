import React from'react';
import './../ItemCount/itemCount.css';



//---------------------------------
const Count = ({ min, max, onAdd, count }) => {
    return (
        <>
            <div className="formatoButton">
                <button onClick= {min} className="sumRes" > - </button>
                <p className ="paButton">{count}</p>
                <button onClick= {max}  className="sumRes"> + </button>
           
            <button disabled={count < 2} onClick ={onAdd}> 
            {" "} 
            AGREGAR  {" "} 
            </button>

            </div>
        </>
    );
};

export default Count;