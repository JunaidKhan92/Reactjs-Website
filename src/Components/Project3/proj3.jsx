
import { useState } from "react";
const allPkgData = [
  { price: 20, Varity: "Weekly" },
  { price: 100, Varity: "Monthly" },
  { price: 60, Varity: "Weekly" },
  { price: 30, Varity: "Monthly" },
  { price: 78, Varity: "Weekly" },
  { price: 18, Varity: "Weekly" },
]

function Proj3(props) {
  const [Packages, setPackages] = useState(allPkgData)

  const changeHandler = (event) => {
    let Value = event.target.value
    if (Value === "Weekly") {

      let WeeklyPkg = allPkgData.filter((data) => data.Varity === Value)
      setPackages(WeeklyPkg)
    }
    if (Value === "Monthly") {
      setPackages(allPkgData.filter((data) => data.Varity === Value))
    }
    if (Value === "All") {
      setPackages(allPkgData.filter((data) => { return data }))
    }
    if (Value === "Low to High") {
      setPackages(
        [...allPkgData].sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
        }
        )
      )  
    }
    if (Value === "High to Low"){
      setPackages(
        [...allPkgData].sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
        }
        )
      )
    }
  }


  return (
    <>
      <div className="w-[100%] h-[100vh] bg-blue-200 flex items-center flex-col">
        <div className='w-[100%] p-2 text-center'>
          <h1 className='text-[34px] underline font-bold'>Project 3</h1>
        </div>
        <div className='w-[40%] p-2 border-2 border-[black] flex justify-center flex-col' >
          <div className="w-[100%] flex justify-between p-2 ">
            <lable>
              Price
              <select onChange={changeHandler}>
                <option>All</option>
                <option>Low to High</option>
                <option>High to Low</option>
              </select>
            </lable>
            <lable>
              Varity
              <select onChange={changeHandler}>
                <option>All</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </lable>
          </div>
          <div className=" w-[100%] h-[150px] overflow-auto p-2 flex flex-col gap-2">
            {

              Packages.map((data, index) => {

                return (
                  <div className="w-[100%] border-2 p-2" key={index}>
                    <p>Price:<span>{data.price}Rs</span></p>
                    <p>Varity:<span>{data.Varity}</span></p>
                  </div>
                );
              })
            }
          </div>
        </div>
      <p>Dear {props.userData.name} with Email  {props.userData.email} is Register </p>
      </div>
    </>
  );
}

export default Proj3;