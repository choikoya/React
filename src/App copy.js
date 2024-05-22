// import logo from './logo.svg';
// import Hello from './01/Hello'; 
import './App.css';
import MyClock from './02/MyClock';
//import MyDiv from './03/MyDiv';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import Gallery from './10/Gallery';
// import TrafficMain from './08/TrafficMain'
// import FoodMain from './07/FoodMain';
// import Traffic from './08_1/Traffic';
// import TrafficNav from './08_1/TrafficNav';
// import MyRef from './09/MyRef';
// import Festival from './11/Festival';
import Frcst from './13/Frcst';
import FrcstList from './13/FrcstList';


import { IoHomeOutline } from "react-icons/io5";
import { logDOM } from '@testing-library/react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">  */}
      <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
        {/* <MyClock/> */}

        <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-amber-400'>
          <p>header</p>
          <ul>
            <li><Link to='/lotto'>Lotto</Link></li>
            <li><Link to='/frcst'>단기예보</Link></li>
          </ul>
          <p>
            <Link to='/'>

              <IoHomeOutline className='text-3xl text-black font-bold' />
            </Link>
          </p>

        </header>
        {/* grow 위아래 잡고 나머지 사이즈는 다 main으로 잡겠다 */}
        <main className='grow'>
          <Routes>
            {/* <FoodMain/> */}
            <Route path='/' element={<MyClock />} />
            {/* / <MyDiv/> */}
            {/* <MyList/> */}
            <Route path='/lotto' element={<Lotto />} />
            {/* <BoxOffice/> */}
            {/* <TrafficMain/> */}
            {/* <TrafficNav/> */}
            {/* <Traffic/> */}
            {/* <MyRef/> */}
            {/* <Gallery/> */}
            {/* <Festival/> */}
            <Route path='/frcst' element={<Frcst/>}/>
            <Route path='/frcstlt' element={<FrcstList/>}/>
            
          </Routes>

        </main>
        <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
          footer
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App; 
