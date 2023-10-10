import React from 'react';
import "./result.css"
import "../Form/form"
import ResultItem from "./resultitem";



const Result = (props) => {
 
  console.log(props.getresult);

  console.log(props.clearResult);
    


  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
        </tr>
        {
        props.clearResult?
          props.getresult.map((element) =>{
            return <ResultItem year={element.year} savingsEndofYear={element.savingsEndOfYear} yearlyInterest={element.yearlyInterest} yearlyContribution={element.yearlyContribution}></ResultItem>
          }) 
          :
         <tr>
          <td colSpan={4} >Please fill all inputs to get results...!</td>
         </tr>
       
        }
      </tbody>
    </table>

  );
}

export default Result;