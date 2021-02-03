import React from 'react';
import './App.css';
import Covid from './Covid';
import Form from './form';
import Infected from './infected';

class App extends React.Component {

  state = {
    dateRep: undefined,
    cases_weekly: undefined,
    deaths_weekly: undefined,
    countriesAndTerritories: undefined,
    popData2019: undefined,
    notification_rate_per_100000_population_14_days: undefined,
    error: undefined,
  }

  gettingcovid = async (e) => {
    
      e.preventDefault();
      const codata = await 
      fetch('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/', {
        mode: 'no-cors',
        
      }     
    )
  
      const data = await codata.json();
      console.log(data);
         }


  render () {
    return (
      <div>
        <Covid />
        <Form coviddata={this.gettingcovid}/>
        <Infected />
      </div>
    )
  }
}


export default App;
