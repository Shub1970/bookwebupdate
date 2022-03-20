import React from 'react'

function Expandbook({props}) {
return (
    <>
    
    <div className="expandbookcontainer">
        <img src={props.image} style={{background:'bock'}} />
        <div className="discription">
            <h6>{props.discription}</h6>
            </div>
        <div className="author"  >
            <h6>{props.author}</h6>
            </div>
        </div>
        
        
    </>
)
}

export default Expandbook