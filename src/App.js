import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home.js'
import NavBar from './Component/NavBar/NavBar';
import LoanOne from './Component/loan/LoanOne';
import LoanTwo from './Component/loan/LoanTwo';
import LoanThree from './Component/loan/LoanThree';
import LoanFour from './Component/loan/LoanFour';
import LoanFive from './Component/loan/LoanFive';
import Login from './Component/Login/Login';
import AdminHome from './Component/Admin/AdminHome';
import LoanOneInbox from './Component/Admin/Pages/LoanOneInbox';
import LoanTwoInbox from './Component/Admin/Pages/LoanTwoInbox';
import LoanThreeInbox from './Component/Admin/Pages/LoanThreeInbox';
import LoanFourInbox from './Component/Admin/Pages/LoanFourInbox';
import LoanFiveInbox from './Component/Admin/Pages/LoanFiveInbox';

function App() {
  return (
    <div className="App">
      <div><NavBar /></div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/loan-1' element={<LoanOne />} />
        <Route path='/loan-2' element={<LoanTwo />} />
        <Route path='/loan-3' element={<LoanThree />} />
        <Route path='/loan-4' element={<LoanFour />} />
        <Route path='/loan-5' element={<LoanFive />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/loan1-inbox/:id' element={<LoanOneInbox />} />
        <Route path='/loan2-inbox/:id' element={<LoanTwoInbox />} />
        <Route path='/loan3-inbox/:id' element={<LoanThreeInbox />} />
        <Route path='/loan4-inbox/:id' element={<LoanFourInbox />} />
        <Route path='/loan5-inbox/:id' element={<LoanFiveInbox />} />
      </Routes>
    </div>
  );
}

export default App;
