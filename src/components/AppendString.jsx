import React, {useState} from 'react'

const AppendString = () => {
    const [string1, setstring1] = useState(""); 
    const [string2, setstring2] = useState(""); 
    const [result, setResult] = useState(""); 
  
    const handlestring1Change = (e) => {
      setstring1(e.target.value); 
    };
  
    const handlestring2Change = (e) => {
      setstring2(e.target.value);
    };
  
    const calculateResult = () => {
        setResult(string1 +" " + string2);
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        calculateResult();
        }
    };
  return (
    <div className="parent">
        <table cellSpacing="6" cellPadding="15">
          <tbody>
            <tr>
                <th><label htmlFor="fn">First String</label></th>
                <th>:</th>
                <td><input type="text" value={string1} onChange={handlestring1Change} id="fn" onKeyPress={handleKeyPress}/></td>
            </tr>
            <tr>
                <th><label htmlFor="sn">Second String</label></th>
                <th>:</th>
                <td><input type="text" value={string2} onChange={handlestring2Change}  id="sn" onKeyPress={handleKeyPress}/></td>
            </tr>
            <tr>
                <td colSpan="3" style={{textAlign:"center"}}><button  type="button" onClick={calculateResult} >SUBMIT</button></td>
            </tr>
            </tbody>
        </table>
        {result && <p>RESULT : {result}</p>}
    </div>
  )
}

export default AppendString