import React, { useEffect, useState } from 'react';
import Footer from '../Components/footer';
import '../Styles/Pages/result.scss';
import axios from 'axios';
import moment from 'moment';
import AnimatedNumber from 'react-animated-numbers';

require('dotenv').config();

const Result = () => {
  const [result, setResult] = useState(null);
  let username = window.location.href.split('country=')[1];
  const url = `https://covid-193.p.rapidapi.com/statistics?country=${username}`;
  const key = 'fff1fce876msh0b3711dc206a7b5p18fa5bjsn4ddbf320a268';
  const host = 'covid-193.p.rapidapi.com';

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        method: 'GET',
        url: url,
        headers: {
          'x-rapidapi-key': key,
          'x-rapidapi-host': host
        }
      });
      setResult(response.data.response[0]);
    }
    fetchData();
  }, [url]);

  return (
    <React.Fragment>
      {!result && (
        <div className='result-container'>
          <div className='header'>
            <span id='country-name'>{`Covid-19`}</span>
            <br />
            <span>{`Located: ---`}</span>
            <br />
            <span id='date'>{`Results due: ---`}</span>
            <br />
            <i className='fas fa-users'></i>
            <span>--</span>
          </div>
          <div className='data-container'>
            <div className='box'>
              <h2 style={{ color: '#DB9126' }}>CASES</h2>
              <div className='results-container'>
                <h1>000</h1>
                <span>000</span>
              </div>
            </div>
            <div className='box'>
              <h2 style={{ color: '#436BF3' }}>TESTS</h2>
              <div className='results-container'>
                <h1>000</h1>
              </div>
            </div>
            <div className='box'>
              <h2 style={{ color: '#15AB2E' }}>RECOVERED</h2>
              <div className='results-container'>
                <h1>000</h1>
              </div>
            </div>
            <div className='box'>
              <h2 style={{ color: '#ee6c4d' }}>DEATHS</h2>
              <div className='results-container'>
                <h1>000</h1>
                <span>---</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {result && (
        <div className='result-container'>
          <div className='header'>
            <span id='country-name'>{`${result.country} Covid-19`}</span>
            <br />
            <span>{`Located: ${result.continent}`}</span>
            <br />
            <span id='date'>{`Results due: ${moment(
              result.time
            ).calendar()}`}</span>
            <br />
            <i className='fas fa-users'></i>
            <span> {result.population}</span>
          </div>
          <div className='data-container'>
            <div className='box'>
              <h2 style={{ color: '#DB9126' }}>CASES</h2>
              <div className='results-container'>
                <h1>
                  <AnimatedNumber
                    id='animated'
                    animateToNumber={result.cases.total}
                    includeComma
                    config={{ tension: 89, friction: 40 }}
                    animationType={'random'}
                  />
                </h1>
                <span>{result.cases.new}</span>
              </div>
            </div>
            <div className='box'>
              <h2 style={{ color: '#436BF3' }}>TESTS</h2>
              <div className='results-container'>
                <h1>
                  <AnimatedNumber
                    animateToNumber={result.tests.total}
                    includeComma
                    config={{ tension: 89, friction: 40 }}
                    animationType={'calm'}
                  />
                </h1>
              </div>
            </div>{' '}
            <div className='box'>
              <h2 style={{ color: '#15AB2E' }}>RECOVERED</h2>
              <div className='results-container'>
                <h1>
                  <AnimatedNumber
                    animateToNumber={result.cases.recovered}
                    includeComma
                    config={{ tension: 89, friction: 40 }}
                    animationType={'calm'}
                  />
                </h1>
              </div>
            </div>
            <div className='box'>
              <h2 style={{ color: '#ee6c4d' }}>DEATHS</h2>
              <div className='results-container'>
                <h1>
                  <AnimatedNumber
                    animateToNumber={result.deaths.total}
                    includeComma
                    config={{ tension: 89, friction: 40 }}
                    animationType={'random'}
                  />
                </h1>
                <span>{result.deaths.new}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </React.Fragment>
  );
};
export default Result;
