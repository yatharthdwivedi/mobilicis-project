import logo from './logo.svg';
import './App.css';
import UsersTable from './components/UsersTable';
import MaleTable from './components/MaleTable';
import { Route, Routes } from 'react-router-dom';
import CityTable from './components/CityTable';
import EmailTable from './components/EmailTable';
import QuoteTable from './components/QuoteTable'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UsersTable/>} />
        <Route path='/male' element={<MaleTable/>}/>
        <Route path='/city' element={<CityTable/>} />
        <Route path='/email' element = {<EmailTable/>}/>
        <Route path='/quote' element = {<QuoteTable/>}/>
      </Routes>
    </>
  );
}

export default App;
