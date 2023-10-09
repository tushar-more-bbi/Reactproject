import React from 'react';
import "./result.css"

import ResultItem from "./resultitem";



const Result = (props) => {
 
   console.log(props.getresult);
   
    
    


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
          props.getresult.map((element) =>{
            return <ResultItem year={element.year} savingsEndofYear={element.savingsEndOfYear} yearlyInterest={element.yearlyInterest} yearlyContribution={element.yearlyContribution}></ResultItem>
          })
        }

       
      </tbody>
    </table>

  );
}

export default Result;