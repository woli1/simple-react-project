import { useState } from "react";
import QRcode from "react-qr-code";




export default function QRcodeGenerator(){
    const [qrCode,setQrCode]=useState("");
    const [input,setInput]=useState("");


    function handleGenerateQrCode(){
        setQrCode(input);
        setInput('');
    }
    return (
        <div>
            <h1>Qr Code Generator</h1>
            <div>
                <input
                onChange={(e)=>setInput(e.target.value)}
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your value here"

                />
                <button
                disabled={input&&input.trim()!==""?false:true}
                onClick={handleGenerateQrCode}
                >
                    Generate
                </button>


            </div>
            <div>
                <QRcode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
            </div>
        </div>
    )

}