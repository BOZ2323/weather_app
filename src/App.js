import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '344553880e500887d7d24b966f0e73a2';

class App extends React.Component{
    getWeather= async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    }


    render(){
        return(
            <div>
                <Titles/>
                <Form getWeather = {this.getWeather}/>
                <Weather/>

            </div>
        );
    }
}

export default App;
