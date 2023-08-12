
import { useState } from "react"

export default function Todo() {
    let [task, setTask] = useState([])
    let [compTask, setComTask] = useState([])
    let [input, setInput] = useState('')

    const addValue = (e) => {
            setInput(e.target.value)
    }
    const addTask = () => {
        let Value = document.getElementById('Input').value
        if (Value === "") {
            window.alert("Please Enter any Task ")
        }
        else{
            setTask(task => [input, ...task]);
            setInput("")
        }
    }
    const deleteTask = (index) => {
        let currentIndex = index
        const delTask = task.filter((value, index) => {
            return index !== currentIndex
        })
        setTask(delTask)
    }
    const completedTask = (index) => {
        let currentIndex = index
        const remaingTask = task.filter((value, index) => {
            return index !== currentIndex
        })
        const delTask = task.filter((value, index) => {
            return index === currentIndex
        })
        setComTask(compTask => [delTask, ...compTask])
        setTask(remaingTask)

    }
    const deleteCompTask = (index) => {
        let currentIndex = index
        const delTask = compTask.filter((value, index) => {
            return index !== currentIndex
        })
        setComTask(delTask)
    }

    return (
        <>
            <div className="p-2 bg-[#ECF8F9] flex flex-col items-center gap-2" >
                <div className="sm:w-[50%] w-[95%] bg-[#30A2FF] flex justify-center items-center flex-col gap-3 py-2">
                    <div className="sm:w-[80%] w-[90%]  border-b-2 sm:pb-2 pb-1 sm:pl-4  pl-2 my-4">
                        <h1 className=" font-roboto sm:text-[40px] text-[28px]  font-bold text-[white]" >Todo List</h1>
                         <p className="sm:text-[16px] text-[14px] text-[white] font-roboto" >A Simple React Todo List App</p>
                    </div>
                    <div className="w-[100%] flex flex-col gap-4  pb-2 mt-5">
                        <div className="w-[100%] p-2 flex sm:gap-2 gap-1 justify-around">
                            <input id="Input" type="text" value={input} onChange={addValue} placeholder="Add Todo here" className="sm:w-[70%] font-roboto sm:text-[20px] text-[16px] pl-3 h-[40px]"></input>
                            <button type="button" onClick={addTask}
                                className="sm:w-[25%] bg-white border-2 font-Kanit border-[#3A98B9] text-[#3A98B9] font-semibold sm:text-[18px] text-[14px] px-2 sm:px-5 py-1 
                              hover:bg-[#3A98B9] border-2 hover:border-white  hover:text-[white]"
                            >Add Task</button>
                        </div>
                    </div>
                    <div className="w-[100%] h-[420px]  flex flex-col gap-3 overflow-hidden pt-5">
                        {task.map((task, index) => {
                            return (
                                <div className="w-[100%] sm:h-[55px] h-[45px] sm:pl-5 pl-2 flex justify-between items-center  bg-white bg-opacity-60 backdrop-blur-lg drop-shadow-xl" key={index}>
                                    <li className=" font-Kanit list-disc  sm:text-[18px] text-[15px] pl-1 text-[white]">{task}</li>
                                    <div className="flex gap-4 p-2">
                                        <i onClick={() => completedTask(index)}  class="fa-regular sm:fa-lg fa-circle-check" style={{ "color": "green" }}></i>
                                        <i onClick={() => deleteTask(index)} class="fa-solid fa-trash sm:fa-lg" style={{ "color": "red" }}></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-[100%] flex flex-col gap-3 overflow-hidden pt-5">
                        <h2 className=" font-roboto text-[24px] text-[white] p-2 border-t-2 text-center">Completed Task</h2>
                    {compTask.map((task, index) => {
                        return (
                            <div className="w-[100%] sm:h-[55px] h-[45px]  sm:pl-5  pl-2 flex justify-between items-center  bg-[#9CFF2E] bg-opacity-80 backdrop-blur-xl drop-shadow-lg" key={index}>
                                <li className=" font-Kanit list-disc  text-[15px] sm:text-[18px] pl-1 text-[blue] line-through">{task}</li>
                                <div className="flex gap-2 p-2 mr-4">
                                    <i onClick={() => deleteCompTask(index)} class="fa-solid fa-trash" style={{ "color": "red" }} ></i>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}