import { useState } from "react";

function ActionBox() {

    const [shortenURLValue, setShortenURLValue] = useState<string>();
    const [inputURLValue, setInputURLValue] = useState<string>();

    return (
            <>
            {/* <TextField inputValue={shortenURLValue} textValue="SHORTEN NAME" />
            <TextField inputValue={inputURLValue} textValue="YOUR URL" />             */}
            <div className="inputValues">
            <div>SHORTEN NAME</div>
                <input value={shortenURLValue} name="shortenURLValue" onChange={
                    e => setShortenURLValue(e.target.value)} />
            </div>
            <div className="inputValues">
                <div>YOUR URL</div>
                <input value={inputURLValue} name="inputURLValue" onChange={
                    e => setInputURLValue(e.target.value)} />
            </div>

            <button id="createButton" onClick={() => {
                const data = {
                    "shorterName": shortenURLValue,
                    "redirect": inputURLValue,
                    "dateCreated": new Date().toUTCString()
                }
                console.log(inputURLValue);
                fetch('http://localhost:3000/r', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }).then((response) => response.json()).then((data) => {
                    console.log('Success:', data);
                }).catch((error) => {
                    console.error('Error:', error);
                });
            }}>CREATE</button>

            </>
        );
}

export default ActionBox