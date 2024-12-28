const ATMDeposit = ({ onChange, isDeposit, atmMode, isValid }) => {
  const choice = ['Deposit', 'Cash Back'];
  console.log(`ATM isDeposit: ${isDeposit}`);
  return (
    <label className="label huge">
      {
        (atmMode !== "" ) && 
        <div>
          <h3>{choice[Number(!isDeposit)]}</h3>
          <input class="form-control" id="number-input" type="number" width="200" onChange={onChange}></input>
          <input class="btn btn-dark" type="submit" value="Submit" id="submit-input" disabled={!isValid}></input>
        </div>
      }
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  const [atmMode, setATMMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState} `;
  // console.log(`Account Rendered with isDeposit: ${isDeposit}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === "Cash Back" && Number(event.target.value) > totalState) {
      setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };
  
  const handleModeSelect = (event) => {
    setATMMode(event.target.value);

    switch ( atmMode ) {
      case "Deposit":
        setIsDeposit(false);
        console.log(`${atmMode}`);
        break;
      case "Cash Back":
        setIsDeposit(true);
        console.log(`${atmMode}`);
        break;
      default:
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <label>Select an action below to continue</label><br />
      <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="mode" id="mode-select" onChange={(e) => handleModeSelect(e)}>
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
      </select><br />
      <ATMDeposit 
        onChange={handleChange} 
        isDeposit={isDeposit}
        atmMode={atmMode}
        isValid={validTransaction}>
      </ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById('root'));
