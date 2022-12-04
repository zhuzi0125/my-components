import logo from './logo.svg';
import './App.css'

import {useNotification} from'rc-notification'

const NOTICE = {
  content: <span>simple show</span>,
  onClose() {
    console.log('simple close');
  },
  // duration: null,
};
function App() {
 const [{open},holder]=useNotification({})
  const show=()=>{
    alert("x")
    open({
      ...NOTICE,
      content:<div>223</div>
    })
    
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={show}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
