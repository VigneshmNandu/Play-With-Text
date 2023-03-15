import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [buttonText, setButtonText] = useState("Enable Dark Mode")

    // const toogleMyStyle = () => {
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
                
    //         })
    //         setButtonText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setButtonText("Enable Light Mode")
    //     }
    // }

    let aboutPageStyle = {
        backgroundColor: props.mode === 'dark'?'#070c0f':'white',
        color: props.mode === 'dark'?'white':'black'
    }

    return (
        <div className="container my-3" style={aboutPageStyle}>
            <h1 className="my-3">Play With Text </h1>
            <div className="accordion" id="accordionExample" style={aboutPageStyle}>
                <div className="accordion-item" style={aboutPageStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={aboutPageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <strong>Covert Your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            This app lets you to convet your text to uppercase lowercase etc
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={aboutPageStyle} >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={aboutPageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Remove Extra Spaces</strong> 
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" >
                            This app lets you to remove any extra spaces from your text
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={aboutPageStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={aboutPageStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Other Features Coming Soon</strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Features like remove extra special sysmbols, captilize first word etc
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
