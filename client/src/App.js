
import "tailwindcss/dist/base.css";
import "./styles/globalStyles.css";
import { AccountBox } from 'components/accountbox';
import {  Route, Routes, Router } from 'react-router-dom';
import Form from './components/Form/From'
import FormFields from "components/FormFields/FormFields";
import Home from 'components/Home'
const App = () => {
  return (<>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<AccountBox />} />
    </Routes>

  </>)
}

export default App;
