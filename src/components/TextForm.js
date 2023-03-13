import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    let handleCopyText = () => {
       let newText = document.getElementById('myBox');
       navigator.clipboard.writeText(newText.value)
    }

    return (
        <>
            <div className="container mb-7">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={(event) => {
                            console.log("hai");
                            setText(event.target.value);
                        }}
                        id="myBox"
                        rows="6"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={() => { let newText = text.toUpperCase(); setText(newText); }}> CONVERT TO UPPER CASE </button>
                <button className="btn btn-primary mx-2" onClick={() => { let newText = text.toLowerCase(); setText(newText); }}> convert to lower case </button>
                <button className="btn btn-primary mx-2" onClick={() => { let newText = text.split(/[ ]+/); setText(newText.join(" ")) }}> Remove Extra Spaces </button>
                <button className="btn btn-primary mx-2" onClick={handleCopyText}> Copy Text </button>
                <button className="btn btn-primary mx-2" onClick={() => { setText("") }}> Clear </button>
            </div>
            <div className="container mb-7" >
                <h2> Details about The Text You Entered </h2>
                <p>
                    Number of characters - {text.length} <br />
                    Number of Words - {text.split(" ").length} <br />
                    Time Required to Read this Paragraph - {" "}
                    {text.split(" ").length * 0.008} minutes
                    <br />
                    Number of Sentences - {text.split(".").length - 1} <br />
                </p>
            </div>
        </>
    );
}
