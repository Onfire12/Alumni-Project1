import React,{Component} from 'react';
import './Main.css';
import Collapse from '../Test/Collapse';
import Currency from "../currencyConverter";
import Weather from "../WeatherNow";


class Main extends  Component{  
    render(){
      return(
          <div className="MainContainer">
            <h1>Hello Tools</h1>
            <Collapse title={"Currency Converter"}>
              <div>
              <Currency/>
              </div>
            </Collapse>
  
            <Collapse title={"Weather Now"}>
              <div>
                <Weather/>
              </div>
            </Collapse>
          </div>
      )
    }
  }

export default Main;