import { useEffect, useState } from 'react';
import './App.css';
import Start from './startpage/Start.jsx'
import Home from './HomePage/Home';


function loadings(){
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve('setLoading'),1000);
    
  });
    return promise;
}

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    loadings()
    .then(res => {
      console.log(res);
    })
    .finally( () =>{
      setIsLoading(false);
    });
  },
    [setIsLoading]
  );
  return (
    <div className="App">
      {isLoading && <Start/>}
      {!isLoading && <Home/>}
    </div>
  );
}

export default App;
