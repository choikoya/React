import './MyClock.css';
import style from './My.module.css';
import { useEffect, useState } from 'react';


function MyClockTime(){
    const [ctime, setCTime] = useState(new Date());


    useEffect(()=>{
        const tm = setInterval(() => { 
            setCTime(new Date())
        }, 1000);

    
        return( )=>{ //초당 1000도는걸 clear 시킴

            clearInterval(tm);
        }
}, []);

return(
        
        <> 
        
        <div className={style.c1}>
            {/* toLocaleTimeString 해야 타임나옴 */}
            {ctime.toLocaleTimeString()} 
        </div>
        </>
    );
}

export default MyClockTime;