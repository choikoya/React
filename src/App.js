// import logo from './logo.svg';
// import Hello from './01/Hello'; 
import './App.css';
// import MyClock from './02/MyClock';
//import MyDiv from './03/MyDiv';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
import FoodMain from './07/FoodMain';
import BoxOffice from './06/BoxOffice';
import { IoHomeOutline } from "react-icons/io5";
import { logDOM } from '@testing-library/react';

function App() { 
  return ( 
  
    // <div className="App"> 
    <div className="flex flex-col w-full max-w-screen-lg h-screen overflow-y-auto mx-auto">
      {/* <MyClock/> */}
      
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-amber-400'>
        <p>header</p>
        <p>K-digital</p>
        <p><IoHomeOutline className='text-3xl text-black font-bold' /></p>
      </header>
      {/* grow 위아래 잡고 나머지 사이즈는 다 main으로 잡겠다 */}
      <main className='grow'> 
        
      <FoodMain/>
        {/* <MyClock/> */}
        {/* / <MyDiv/> */}
        {/* <MyList/> */}
        {/* <Lotto/> */}
{/*         
        <BoxOffice/> */}

    
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        footer
      </footer>
    </div>
  );
}

export default App; 
