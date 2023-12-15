import React from 'react'

const Header=()=>{
     const head={
        margin:"auto",
        width:"8%",
        textAlign:"center",
        borderTop:"1px  solid black",
        borderBottom:"1px solid black"
     }

     

    return (
        <div>

            <h1 style={{textAlign:"center",color:"orange",padding:"0.8% 0%"}}>
                -   FROM REACT PIZZA CO .  -
            </h1>

            <div style={{padding:"0.3% 0%"}}>

                <h3 style={head}>
                    OUR MENU
                </h3>

            </div>

            <p className='head-content'>
                
                    Authentic Italian Cuisine. 6 creative dishes to choose from .
                    All from our stone oven,organic and finger licking delicious
            </p>
            
        </div>
        
    )
}


export default Header