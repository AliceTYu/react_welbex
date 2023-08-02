import logo from './logo.svg';
import './index.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="wrapper">
      <div className='wrapper__header'>
        <div className='container'>
          <Header/>
        </div>
      </div>
      <div className='wrapper__main'>
        <div className='container'>
          <Main/>
        </div>
      </div>
      <div className='wrapper__footer'>
        <div className='container'>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
