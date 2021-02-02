import React from'react';

//---------------------------------
const Count = ({ min, max, onAdd, count }) => {
    return (
        <>
            <div className="formatoButton">
                <button onClick= {min} > - </button>
                <p>{count}</p>
                <button onClick= {max} > + </button>
            </div>
            <button disabled={count < 2} onClick ={onAdd}> 
            {" "} 
            AGREGAR {count} {" "} 
            </button>
        </>
    );
};

export default Count;