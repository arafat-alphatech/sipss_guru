import React, { Component } from "react";

class Loading extends Component {
    render() {
        
        return (
                <div className='loading'>
                    <div style={{ position: 'absolute', left: "43%", top: "80%" }}>
                        <h1 style={{color: 'white'}}>SIPS Loading...</h1>
                    </div>
                </div>
        );
    }
}

export default Loading;
