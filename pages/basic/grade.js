import React, { useState } from 'react'


export default function Grade(){
    const[inputs,setInputs] = useState({})
    const[result,setResult] = useState('')
    const{name,kor,eng,math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({ ...inputs, [name] : value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        let total = Number(kor) + Number(eng) + Number(math)
        let avg = total / 3
        let pass = 60 <= avg ? "합격" : "불합격"
        setResult(`이름 : ${name} 국어 : ${kor} \n영어 : ${eng} \n수학 : ${math} \n총점 : ${total} \n평균 : ${avg.toFixed(2)}
                    합격여부 : ${pass}`)
    }
    
    return(<div>
    <form action = ''>
    <h1>Grade폼</h1>
    <label><b>username</b></label>
    <input type="text" name = "name" onChange={handleChange} /><br />

    <label htmlFor=""><b>kor</b></label>
    <input type="text" name = "kor" onChange={handleChange} /><br />

    <label htmlFor=""><b>eng</b></label>
    <input type="text" name = "eng" onChange={handleChange} /><br />

    <label htmlFor=""><b>math</b></label>
    <input type="text" name = "math" onChange={handleChange} /><br />

    <button onClick={handleClick}>출력하기</button>
    </form> 
    <div>결과 : {result}</div>
    </div>)
    }