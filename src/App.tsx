import Header from './components/Header'
import Line from './components/Line'
import Biography from './components/Biography'
import Services from './components/Services'
import Questions from './components/Questions'
import Collage from './components/Collage'
import Footer from './components/Footer'
import './App.css'
import { createContext, Dispatch, useState } from 'react'

export const ThemeContext = createContext<ContextType | null>(null);

type ContextType = {
  theme: string,
  setTheme: Dispatch<React.SetStateAction<string>>
}

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`container ${theme}`}>
        <Header />
        <Line />
        <Collage/>
        <Biography/>
        <Services />
        <Questions/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
