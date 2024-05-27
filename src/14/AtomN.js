
import {atom, selector} from "recoil";

//function아니고 변수 atom함수로 만듦 아톰의 인수는 오브젝트. 그안에 키값, 디폴트
export const AtomN = atom({
    key : "AtomN",
    default : 10
});
export const AtomN2 = selector({
    key : "AtomN2",
    get : ({get})=>{
        // let tm = get(AtomN)%2 === 0? "짝" : "홀";
        // return tm;
        return get(AtomN)*2;

    }
});