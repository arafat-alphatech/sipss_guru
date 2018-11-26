import React, { Component } from "react";

class Loading extends Component {
    render() {
        
        return (
            <div>
                <div style={{ position: 'absolute', left: "38%", top: "20%" }}>
                        <h1 style={{color: 'white'}}>SIPS</h1>
                    </div>
                <div className='loading'>
                    <div style={{ position: 'absolute', left: "30%", top: "80%" }}>
                        <h1 style={{color: 'white'}}>Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loading;
