import { useState } from "react";
import validator from 'validator';

function ActionBox() {
    
    const [communicate, setCommunicate] = useState<string>("");
    const [shortenURLValue, setShortenURLValue] = useState<string>("");
    const [inputURLValue, setInputURLValue] = useState<any>("");

    return (
            <>
            <div id="communicate">  
                {communicate}          
            </div>
            <div className="inputValues">
            <div>SHORTEN NAME</div>
                <input value={shortenURLValue} name="shortenURLValue" placeholder="minimum 4 characters" onChange={
                    e => {
                        setShortenURLValue(e.target.value)
                        setCommunicate("")
                        }} />
            </div>
            <div className="inputValues">
                <div>YOUR URL</div>
                <input value={inputURLValue} name="inputURLValue" placeholder="https://google.com/" onChange={
                    e => {
                        setInputURLValue(e.target.value)
                        setCommunicate("")
                        }} />
            </div>

            <div id="createButton" onClick={async () => {
                const data = {
                    "shorterName": shortenURLValue,
                    "redirect": inputURLValue,
                    "dateCreated": new Date().toUTCString()
                }

                const validURL = validator.isURL(inputURLValue);
                const validName = validator.isLength(shortenURLValue, {min:4, max: 20});
                async function fetchLink(){
                    const res = await fetch('http://localhost:3000/r', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)})

                    const d = await res.json();
                    if(!res.ok) throw Error(d.message)
                    return d;
                }

                
                
                if(validURL && validName){
                try {   
                    const c = await fetchLink()
                    setCommunicate(`Your created URL: ${c.url}`)                    
                } catch (error:any) {
                    setCommunicate(error.message);
                    console.error('Error:', error);
                }
                }
                else if(!validURL && !validName){
                    setCommunicate("Created name is too short and input URL is not valid!");
                }                
                else if(!validName){
                    setCommunicate("Created name is too short!");
                }
                else if(!validURL){
                    setCommunicate("Input URL is not valid!");
                }
            }}>CREATE</div>

            </>
        );
}

export default ActionBox