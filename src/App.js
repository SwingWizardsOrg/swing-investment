import Header from './pages/Header'
import Nav from './pages/Nav'
import Madesimple from './pages/Madesimple'
import Investment from './pages/Investment'
import Stats from './pages/Stats'
import Account from './pages/Account'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div>
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
