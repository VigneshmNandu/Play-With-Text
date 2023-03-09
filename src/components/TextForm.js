import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter the Test to Alter");

    return (
        <div>
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
            <button
                className="btn btn-primary"
                onClick={() => {
                    console.log("button clicked");
                    let newText = text.toUpperCase();
                    setText(newText)
                }}
            >
                Convert to UPPER CASE
            </button>
        </div>
    );
}
