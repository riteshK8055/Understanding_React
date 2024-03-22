import React from "react";

const Square = () => {

    return (

        <>
        
        
          <div
          style={{border : '1px solid',
                  height: '100px',
                  width: "100%", 
                  display: 'flex' , 
                  justifyContent: "center", 
                  alignItems:"center"
                }} 
          className="square">
            <h2>X</h2>
          </div>
        </>
    );
};

export default Square;