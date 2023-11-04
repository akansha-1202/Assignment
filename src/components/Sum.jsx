import React, {useState} from 'react'

const Sum = () => {
    const [num1, setNum1] = useState(null); 
    const [num2, setNum2] = useState(null); 
    const [result, setResult] = useState(null); 
  
    const handleNum1Change = (e) => {
      setNum1(Number(e.target.value) || null); 
    };
  
    const handleNum2Change = (e) => {
      setNum2(Number(e.target.value) || null);
    };
  
    const calculateSum = () => {
      if (num1 !== null && num2 !== null) {
        setResult(num1 + num2);
      } else {
        setResult(null); // Set the result to null if either input is null
      }
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        calculateSum();
        }
    };
  return (
    <div className="parent">
        <table cellSpacing="6" cellPadding="15">
          <tbody>
            <tr>
                <th><label htmlFor="fn">First Number</label></th>
                <th>:</th>
                <td><input type="number" value={num1 === null ? '' : num1} onChange={handleNum1Change} id="fn" onKeyPress={handleKeyPress}/></td>
            </tr>
            <tr>
                <th><label htmlFor="sn">Second Number</label></th>
                <th>:</th>
                <td><input type="number" value={num2 === null ? '' : num2} onChange={handleNum2Change}  id="sn" onKeyPress={handleKeyPress}/></td>
            </tr>
            <tr>
                <td colSpan="3" style={{textAlign:"center"}}><button  type="button" onClick={calculateSum} >SUBMIT</button></td>
            </tr>
            </tbody>
        </table>
       {result && <p>RESULT : {result}</p>}
    </div>
  )
}

export default Sum