import './App.css';
import {useState} from 'react'
import NewsComponent from './components/NewsComponent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NavComponent from './components/NavComponent';
import Instagram from './components/Instagram';
import MediaComponent from './components/MediaComponent';
import Home from './components/Home';


function App() {

  const [language, setLanguage] = useState('SPA')

  const toggleLanguage = (current)=>{
    current === 'SPA' ? setLanguage('ENG') : setLanguage('SPA')
    console.log(current)
  }

  return (
    <div className="App">
      <header>
        <NavComponent language={language} toggleLanguage={toggleLanguage} />
      </header>
      <main className="main">
        <section className="home">
          <Home/>
        </section>
        <section className="news">
         <NewsComponent />
        </section>
        <section className="media">
         <MediaComponent />
        </section>
        <section className="instagram">
         <Instagram />
        </section>
        <section className="contact">
         <Contact/>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
