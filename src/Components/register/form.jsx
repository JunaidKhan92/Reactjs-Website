import { useState } from "react"
import Styled from "styled-components" ;
const Form = (props) => {
    let [type, setType] = useState('password');
    let [clr, setClr] = useState('green');
    let [text, setText] = useState('Show Password');
    const hideShowPass = () => {
        if (type === "password") {
            setType("text")
            setClr("red")
            setText('Hide Password')
        }
        else {
            setType("password")
            setClr("green")
            setText('Show Password')
        }

    }
    const Input = Styled.input`
    width:80%;
    font-size:18px;
    border-radius:5px;
    `;
    
    return (
        <>
            <div className="bg-blue-400 h-[100vh] p-4 flex  flex-col items-center">
                <div className="p-4">
                    <h1 className="text-[30px] font-bold text-white">Register Form</h1>
                </div>
                <form onSubmit={props.onSubmit} className="w-[30%] flex flex-col  border-2 p-1 ">
                    <label className="" htmlFor="name">User Name :
                    </label>
                    {/* <Input onChange={props.onChange} value={props.userData.name} name="name" id="name"></Input> */}
                    <input onChange={props.onChange} value={props.userData.name} className="w-[70%]" name="name" id="name"></input>
                    <label htmlFor="email">Email :
                    </label>
                    <input onChange={props.onChange} value={props.userData.email} className="w-[70%]" name="email" id="email"></input>
                    <label htmlFor="password" >Password :
                    </label>
                    <input type={type} onChange={props.onChange} value={props.userData.password} className="w-[70%]" name="password" id="password"></input>
                    <div>
                        <button type="submit" className="py-1 px-3 text-white font-bold text-[18px] bg-yellow-400 mt-4 rounded">Submit</button>
                    </div>
                    <div>
                        <button type="button" style={{ backgroundColor: clr }} onClick={hideShowPass} className="py-1 px-3 text-white font-bold text-[18px]  mt-4 rounded">{text}</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Form;