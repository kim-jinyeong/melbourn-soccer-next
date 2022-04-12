import React, { useState } from 'react' 
import axios from 'axios';

export default function Calc(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})    
    const handleChange = e =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post(proxy + '/api/basic/calc', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>숫자 1 : ${calc.num1}</h3>
            <h3>숫자 2 : ${calc.num2}</h3>
            <h3>연산자 : ${calc.opcode}</h3>
            `
        })
        .catch(err => alert(err))
        }
    
        return <>
        <form action= "" onSubmit={handleSubmit}>
        <h1>Calc폼</h1>
        
        <label htmlFor = ""><b>Num1</b></label>
        <input type = "text" name = "num1" onChange={handleChange} /><br />
    
        <select htmlFor = "" name = "opcode" onChange={handleChange} >
        <option value = "">선택</option>    
        <option value = "+">+</option>
        <option value = "-">-</option>
        <option value = "*">*</option>
        <option value = "/">/</option>
        <option value = "%">%</option>
        </select>
        <br/>
        
        <label htmlFor = ""><b>Num2</b></label>
        <input type = "text" name = "num2" onChange={handleChange} /><br />
        
        <input type ="submit" value="계산하기"/><br/>
        </form>
        <div> 결과 : <span id="result-span"></span></div>
        </>
    }