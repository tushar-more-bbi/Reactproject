
const ResultItem = (props) => {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{props.savingsEndofYear}</td>
            <td>{props.yearlyInterest}</td>
            <td>{props.yearlyContribution}</td>
           
        </tr>
    );
}

export default ResultItem;