import dog from './dog.png';
import './App.css';

//JSX
const testData = [
  "제목 1 입니다.",
  "제목 2 입니다.",
  "제목 3 입니다."
]

function App() {
  const h1Element = <h1>H1 제목 태그 입니당</h1>;
  const imgElement = <img src={dog} className = "App-logo" alt="logo" />;

  return (
    <div className="App">
      <header className="App-header">

        { h1Element }
        { imgElement }
        <p>
          한글로 바꿔보세요. <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {testData.map((contents)=><li>{dontents}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
}

export default App;
