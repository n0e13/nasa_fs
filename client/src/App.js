import './styles/styles.scss';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';
import { landingsContext } from './context/landingsContext';
import { neasContext } from './context/neasContext';

function App() {
  const [landings, setLandings] = useState();
  const [neas, setNeas] = useState();

  const saveLandings = (newLandings) => {
    setLandings(newLandings);
  }

  const saveNeas = (newNeas) => {
    setNeas(newNeas);
  }

  const landingsData = {
    landings,
    saveLandings
  }

  const neasData = {
    neas,
    saveNeas
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <landingsContext.Provider value={landingsData}>
          <neasContext.Provider value={neasData}>
            <Main />
          </neasContext.Provider>
        </landingsContext.Provider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
