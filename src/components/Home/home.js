import React from 'react'



import './home.css'

export const Home = ({greeting}) => {

    return (

        <div className="homeStyle">           
        
            <h2 className="salu">{greeting}</h2>
                       
        </div>
        
    )
}
