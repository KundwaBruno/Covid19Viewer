import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import '../Styles/Pages/search.scss';

const Search = () => {
  const [username, setUsername] = useState('');

  const handleInput = (e) => {
    e.stopPropagation();
    setUsername(e.target.value);
  };

  const goto = (e) => {
    e.preventDefault();
    window.location.replace(`/search?q=${username}`);
  };

  return (
    <div className='search-container'>
      <div className='header'>
        <h1>
          <Typewriter
            // options={{
            //   strings: ['Hey there!'],
            //   autoStart: true,
            //   loop: true
            // }}
            onInit={(typewriter) => {
              typewriter
                .typeString(`Get a country's statistics on covid-19`)
                // .callFunction(() => {
                //   console.log('String typed out!');
                // })

                .pauseFor(2500)
                // .deleteAll()
                // .callFunction(() => {
                //   console.log('All strings were deleted');
                // })
                .start();
            }}
          />
        </h1>
      </div>
      <div className='search-form'>
        <form>
          <input
            type='text'
            value={username}
            onChange={handleInput}
            placeholder='Enter country name'
          />

          <button type='submit' onClick={goto}>
            Go!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
