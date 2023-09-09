import React,{useState} from 'react'


export default function TextForm(props) {
  const [text,setText] = useState('');

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
    props.showAlert('Converted to Uppercase','success');
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase());
    props.showAlert('Converted to Lowercase','success');
  }
  const handleClClick = ()=>{
    setText("");
    props.showAlert('Text Cleared','success');
  }

  const handleCopyClick = ()=>{
    let text1 = document.getElementById('myBox');
    text1.select();
    navigator.clipboard.writeText(text1.value);
    props.showAlert('Copied to clipboard','success');
  }
  const handleExtraSpClick = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Removed extra spaces','success');
  }

  return (
    <>
    <div className='container mt-4' style={{color: props.mode==='warning'? 'black':'wheat'}}>
      <h1 className='text-center'>{props.heading}</h1>
      <div className="mb-4 mt-3">
        <textarea className="form-control" id="myBox" cols="4"  rows="8" placeholder='Enter the text here' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='warning'? 'white':'transparent', color: props.mode==='warning'? 'black':'wheat'}}></textarea>
      </div>
      <button className="btn btn-primary me-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleExtraSpClick}>Remove ExtraSpace</button>
      <button className="btn btn-primary me-2 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button className="btn btn-danger me-2 my-1" onClick={handleClClick}>Clear Text</button>
    </div>
    <div className="container mt-4" style={{color: props.mode==='warning'? 'black':'wheat'}}>
      <h3 className='border-bottom border-warning'>Your Text Summary</h3>
      <p>Ⅰ. {text.split(" ").length-1} words and {text.length} characters</p>
      <p>Ⅱ. {0.008 * (text.split(" ").length-1) } Minutes read</p>
      <h3 className='border-bottom border-warning'>Preview</h3>
      <p >{text}</p>
    </div>
    </>
  )
}
