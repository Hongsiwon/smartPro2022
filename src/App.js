import dog from './dog.png';
import './App.css';

//JSX
const testData = [
  {
    text: "누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. ",
    imgUrl: "https://item.kakaocdn.net/do/fd0050f12764b403e7863c2c03cd4d2d7154249a3890514a43687a85e6b6cc82"
  },
  {
    text: "국무총리는 국회의 동의를 얻어 대통령이 임명한다. ",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QPTO0dfQhrhSVMfjUTjj-7uh1zyqNnjYCg&usqp=CAU"
  },
  {
    text: "재산권의 행사는 공공복리에 적합하도록 하여야 한다.",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdQ2nGjrq3cvdPxKgbuSZ3Kal8cFeueT1UA&usqp=CAU"
  }

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
          {testData.map((contents)=>{
           
            return <li>
              <img src={contents.imgUrl} alt="짱구 사진"/>
              {contents.text}
              </li>
          })}
          
        </ul>

      </header>
    </div>
  );
}

export default App;
