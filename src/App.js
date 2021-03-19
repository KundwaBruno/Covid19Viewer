import React from 'react';
import Search from './Pages/search';
import Footer from './Components/footer';
import './Styles/App.scss';

const App = () => {
  return (
    <div className='main-container'>
      <Search />
      <Footer />
    </div>
  );
};
export default App;
