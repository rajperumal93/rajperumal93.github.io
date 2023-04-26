import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PromiseComp from './Components/Promise';
import Table from './Components/Table';
import AreaChart from './Components/AreaChartEx2';
import AreaCaart_HighChart from './Components/AreaCaart_HighChart';
import Ex2 from './Components/ex2';
import Chart1 from './Components/Chart1';
import SearchDropdown from './Components/SearchDropdown';
import PaginationSimple from './Components/PaginationSimple';
import Slider from './Components/Slider';
import ThemeChange from './Components/ThemeChange';
import Progressbar from './Components/Progressbar';
import Square from './Components/Square';
import Log from './Components/UI/Log';
import GooglePage from './Components/GooglePage';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
       <Header />
      { /* <Footer />
      <PromiseComp /> */}
      {/* <Table /> */}
      {/* <AreaChart /> */}
      {/* <AreaCaart_HighChart /> */}
      {/* <Ex2 /> */}
      {/* <Chart1 /> */}
      {/* <SearchDropdown /> */}
      {/* <PaginationSimple /> */}
      {/* <Slider /> */}
      {/* <ThemeChange /> */}
      {/* <Progressbar /> */}
      {/* <Square /> */}
      {/* <Log /> */}
      {/* < GooglePage /> */}
      <Login />
    </div>
  );
}

export default App;
