import React from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './Components/Header/header'
import Form from './Components/Form/form'
import Result from './Components/Result/result';


function App() {

  var yearlyData=[];

  

  const [yearlyDataResult,setyearlyDataResult] = React.useState([]);
  const [resultFlag,setResultFlag] = React.useState(true);

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log(userInput);
   
       
    let currentSavings = +userInput['currentsavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlysavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedinterest'] / 100;
    const duration = +userInput['investmentduration'];


    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    
    setyearlyDataResult(yearlyData);
    setResultFlag(true);

    // do something with yearlyData ...
  };

 
  const resetFlagHandler = (value) => {
    setResultFlag(value);
  }








  return (
    <div>
      {/* <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header> */}

      <Header src={logo}></Header>
      <Form onsubmitForm={calculateHandler} reset={resetFlagHandler}></Form>
      <Result getresult={yearlyDataResult} clearResult={resultFlag}></Result>
  

      {/* <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div> */}
        {/* <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p> */}
      {/* </form> */}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      {/* <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
