import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Busket from "./Components/Busket";
import Header from "./Components/Header/Header";


function App() {
  return (
    <>
        <Header/>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/busket' element={<Busket/>}/>
      </Routes>
    </>
  );
}

export default App;
