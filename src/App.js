import Header from './pages/Header'
import Nav from './pages/Nav'
import Madesimple from './pages/Madesimple'
import Investment from './pages/Investment'
import Stats from './pages/Stats'
import Account from './pages/Account'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className='bg-[#0D0D0D] w-full h-full'>
       <Toaster/>
      <Header />
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/madesimple" element={<Madesimple/>} />
        <Route exact path="/investment" element={<Investment/>} />
        <Route exact path="/stats" element={<Stats/>} />
        <Route exact path="/account" element={<Account/>} />
      </Routes>
    </div>
  );
}

export default App;
