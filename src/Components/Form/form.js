import React from "react";
import Buttons from "../Button/button.js"
import "./form.css"



const Form = (props) => {
     
    const [currentSavings,setCurrentSavings] = React.useState("");
    const [yearlySavings,setYearlySavings] = React.useState("");
    const [expectedInterest,setExpectedInterest] = React.useState("");
    const [investmentDuration,setInvestmentDuration] = React.useState("");
   

 
    const inputChangeHandler = (identifier,value) => {
        if(identifier === "currentsavings"){
          setCurrentSavings(value);
        } 
        else if(identifier === "yearlysavings"){
          setYearlySavings(value);
        }
        else if(identifier === "expectedinterest"){
          setExpectedInterest(value);
        }
        else{
          setInvestmentDuration(value);
        }
 
    }




     const onSubmitHandler =  (e) => {
      
      e.preventDefault();
      

       const newInputs={
        currentsavings: currentSavings,
        yearlysavings: yearlySavings,
        expectedinterest: expectedInterest,
        investmentduration: investmentDuration,
       }

       console.log(newInputs);
       
       props.onsubmitForm(newInputs);

     }
  
    
     const resetHandler = () => {
      setCurrentSavings("");
      setExpectedInterest("");
      setInvestmentDuration("");
      setYearlySavings("");

      console.clear();
     }
 



    return (
     <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" value={currentSavings} 
            onChange={(e) => {
             inputChangeHandler("currentsavings",e.target.value)
            }}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" value={yearlySavings}
             onChange={(e) => {
              inputChangeHandler("yearlysavings",e.target.value)
             }}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" value={expectedInterest} 
              onChange={(e) => {
                inputChangeHandler("expectedinterest",e.target.value)
               }}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" value={investmentDuration} 
               onChange={(e) => {
                inputChangeHandler("investmentduration",e.target.value)
               }}
            />
          </p>
        </div>
        <Buttons handler={resetHandler}></Buttons>
     </form>   
    )
}

export default Form;