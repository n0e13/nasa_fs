import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
