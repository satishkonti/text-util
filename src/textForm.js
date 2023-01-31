import react, { useState, useRef } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(" ");

    const textRef = useRef(null)

    const handleUpClick = () => {
        const uptext = text.toUpperCase();
        setText(uptext);
        props.showAlert("success : ", "Converted to uppercase")
    }
    const handleLoClick = () => {
        const uptext = text.toLowerCase();
        setText(uptext);
        props.showAlert("success : ", "Converted to lowercase")
    }
    const handleClearClick = () => {
        const uptext = '';
        setText(uptext);
        props.showAlert("success : ", "The texts are cleared")
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("success : ", "The texts are copied")
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleRemoveExtraSapce = () => {
        const newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("success : ", "Removed extra spaces")
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div class="mb-3">
                    <textarea class="form-control" ref={textRef} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        value={text} onChange={handleOnChange} id="mybox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>copyText</button>
                <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSapce}>RemoveExtraSpace</button>
            </div>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").join(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text !== ' ' ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}