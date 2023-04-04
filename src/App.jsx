import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome'
import Game from './components/Game'
import Result from './components/Result'

function App() {
  const WELCOME = 'welcome' , GAME = 'game', RESULT = 'result';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  const [score, setScore] = useState(0);

  let content = null;

  const restartQuiz = () => {
    setScore(0);
    setCurrentScreen(GAME);
  }

  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={() => setCurrentScreen(GAME)} />;
      break;
  
    case GAME:
      content = <Game answeredCorrectly={() => setScore(score + 1)} showResult={() => setCurrentScreen(RESULT)}/>;
      break;
      
    case RESULT:
      content = <Result score={score} restart={() => restartQuiz()}/>
      break;
    default:
      content = <Welcome nextScreen={() => setCurrentScreen(GAME)} />;
      break;
  }

  return (
    <div className="App">
      {content}
    </div>
  )
}

export default App
