import React from 'react';
import "./currencyConverter.css";

class CurrencyConverter extends React.Component{
  constructor(){

    super();
    this.state = {
      defaultCurrency:"USD",
      convertCurrency:"",
      defaultAmount:1,
      rates:[],
      currencies:[]
    }; 

    this.editDefaultCurrency = this.editDefaultCurrency.bind(this);
    this.changeDefaultAmount = this.changeDefaultAmount.bind(this);
    this.editConvertCurrency = this.editConvertCurrency.bind(this);
    this.getApi = this.getApi.bind(this);
    this.getConvertedCurrency.bind(this);

  }

  componentDidMount(){
    this.getApi(this.state.defaultCurrency)
  }

  editDefaultCurrency(e){
    this.setState({defaultCurrency: e.target.value});
    this.getApi(e.target.value)
  }
  changeDefaultAmount(e){
    this.setState({defaultAmount: e.target.value})
  }
  editConvertCurrency(e){
    this.setState({convertCurrency: e.target.value})
  }
  getApi = async(base)=>{
    const api = `https://api.exchangeratesapi.io/latest?base=${base}`;
    fetch(api).then(results => {
        return results.json();
    }).then(data => this.setState({
      rates: data['rates'],
      currencies: Object.keys(data['rates']).sort()
    })
  )}
  getConvertedCurrency(defaultAmount,convertCurrency,rates){
    return Number.parseFloat(defaultAmount * rates[convertCurrency]).toFixed(3);
  }



  render(){
    const {defaultAmount,defaultCurrency,convertCurrency,currencies,rates} = this.state;
    const currencyOption = currencies.map(currency =>
      <option key={currency} value={currency}>{currency}</option>);
    
    const result = this.getConvertedCurrency(defaultAmount,convertCurrency,rates);
    
    return(
      <div className="mainSection">

        <div className="titleContainer">
          <h1>Currency Converter <span><i class="fas fa-comment-dollar"></i></span></h1>
        </div>

      <form className="converterform">
      <div className="container">
          <label>Amount:</label>
          <input type="number" value={defaultAmount} onChange={this.changeDefaultAmount} placeholder="$"/>
      </div>


      <div className="container">
        <label>From:</label>
        <div className="selectContainer">
          <form className="formContainer">
          <select value={defaultCurrency} onChange={this.editDefaultCurrency}>
            {currencyOption}
            <option>{defaultCurrency}</option>
          </select>
          </form>   
        </div>
        <input type="hidden"></input>
      </div>

      {/* <div className="container">
        <button>Inverse Button</button>
      </div> */}

      <div className="container">
        <label>To:</label>
        <div className="selectContainer">
          <form className="formContainer">
            <select value={convertCurrency}onChange={this.editConvertCurrency}>
              {currencyOption}
            </select>
          </form>     
        </div>
        <input type="hidden"></input>
      </div>

      {/* <div>
        <button>Convert Button</button>
      </div> */}
      </form>

      <div className="resultContainer">
        <h2>{defaultAmount} {defaultCurrency} is  {result} {convertCurrency}</h2>
      </div>
    </div>
    )
  }
}

export default CurrencyConverter;