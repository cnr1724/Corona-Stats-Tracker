import React from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div className={styles.container}>        
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <br />
        <text>
        <h1>  <b>COVID-19 - CORONA VIRUS PANDEMIC</b> </h1></text>
        <i>Last Updated on: {new Date(data.lastUpdate).toLocaleDateString('en-US', options) + ',' + new Date(data.lastUpdate).toLocaleTimeString() } </i>
        <br />
        
        <text>
          <b>Reported Cases and Deaths Globally and Country wise</b>
        </text>
        <br />
        <text>
          <i>Select a Country from below list</i>
          </text> 
          <CountryPicker className={styles.countrydiv} handleCountryChange={this.handleCountryChange} />
        <br />
        <br />
        <Cards data={data} country={country} />        
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;