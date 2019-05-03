import React,{Component} from "react";
import "./weatherNow.css"

class WeatherNow extends Component{
    constructor(){
        super();
        this.state = {
            cityName:"",
            object:[],
            city:null,
            showResult:false
        }
    }
    handleChange =(e)=>{
		this.setState({
			[e.target.name]: e.target.value 
		})
	}
	handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handleSubmitSearch Weather')
		try { 
			const searchResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&appid=5cd9e29e47d5913119c8c72365de7b15`);
			if(! searchResponse.ok){
	        	
	        	throw Error(searchResponse.statusText);
	    	}

		    console.log(searchResponse, ' this is just searchResponse')

		    const searchResponseParsedJson = await searchResponse.json();

		    console.log(searchResponseParsedJson, ' parsed searchResponse')
		    
		    this.setState({
		       	object: searchResponseParsedJson,
		       	city: searchResponseParsedJson.name
	    	});
		} catch(err) {
			console.log(err);
		}
	}
    render(){
        return(
            <div className="weatherNow">
                <h1>WeatherNow</h1>

                <div className="searchDiv">
						<form className="" onSubmit={this.handleSubmit}>
					      	<input type="text" name="cityName" value={this.state.cityName} onChange={this.handleChange} placeholder="Search here " className="search-bar" />
					      	<button type="submit" ><span><i className="fa fa-search"></i></span></button>
					    </form>
			    </div>

                <div className="result">
                {this.state.city !== null ?
                <div id="weather_wrapper">
	                <div className="weatherCard">
		                    <div className="currentTemp">
			                    <span className="temp">{this.state.object.main ? Math.floor(this.state.object.main.temp - 273.15) : null}&deg;</span>
			                    <span className="location">{this.state.object.name}</span>
		                    </div>
		                <div className="currentWeather">
			                <span class="conditions">&#xf00d;</span>
                                <p className="weatherDesc">{this.state.object.weather[0].description}</p>
			                <div className="info">
				                <span className="rain">1.3 MM</span>
				                <span className="wind">{this.state.object.wind.speed} MPH</span>
			                </div>
		                </div>
	                </div>
                </div>
                : null
                }
                </div>
                
            </div>
        )
    }

};

export default WeatherNow;