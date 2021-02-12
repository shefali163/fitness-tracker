import React, { Component } from 'react';
import './App.css';
import { Navigation } from './Navigation';
import { Header } from './Header';
import './Home.css';

export class Home extends Component {
  render() { 
    return (
      <div>
        <Navigation />
        <Header />

        <div id="image" role="img" alt ="fitness image" aria-label="Textual Description"></div>


        <div className='text'>

          <h1>Exercise and Nutrition</h1>
          <p>
            Nutrition and exercise are very important aspects of life. </p>
          <p>
            Any healthy individual would be mindful of how they eat, and exercise on a daily basis.
            However, many individuals today struggle to maintain a healthy lifestyle,
            neglecting either their nutrition or exercise. 
            With many suffering with the consequences of an unhealthy lifestyle,
            the need for proper information on how to take care of oneself is very helpful.
            There is so much information on the internet for proper exercise and nutrition,
            but it is very scattered and many people struggle to find information that is very simple and easy to consume.
            </p>
        </div>
      </div >
    );
  }
}
