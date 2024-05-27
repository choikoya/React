import { RecoilRoot } from "recoil";
import RecoilDiv1 from "./RecoilDiv1";

export default function RecoilMain() {
  return (
    <div>
        {/* recoilroot로 묶어주면 div1안에 div2,3다 있으므로 같이 적용됨 */}
        <RecoilRoot>
          <RecoilDiv1/>
        </RecoilRoot>
    </div>
  )
}
