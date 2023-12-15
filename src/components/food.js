import React from 'react'

const Food = () => {

    const linespace={
        paddingTop:"3.5%"
    }

    return (
        <div style={{ padding: "1%", width: "45%", }}>

            <div style={{ padding: "1%",height: "150px", borderRadius: "20px" }}>

                <div style={{ display: "flex", height: "100%" }}>

                    <div style={{ width: "50%" }}>
                        <img src="img-1.webp" style={{ width: "100%", height: "100%", borderRadius: "20px" }}></img>
                    </div>

                    <div style={{ paddingLeft: "3%" }}>

                        <h3 style={linespace}>
                            Focaccia
                        </h3>

                        <p style={linespace}>
                            Ingredients :Bread with italian olive oil and rosemary
                        </p>

                        <p style={linespace}>
                            6
                        </p>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Food