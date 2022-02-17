
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import  AccountBox  from 'components/accountbox';
import {  Route, Routes, Router } from 'react-router-dom';
import Form from "components/FormFields/Form";
import Home from 'components/Home'
const App = () => {
  return (<>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="signup" element={<AccountBox />} />
      <Route path="/createform" element={<Form/>} /> 
      
    </Routes>

  </>)
}

export default App;
