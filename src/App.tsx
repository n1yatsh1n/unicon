import { Route, Routes, BrowserRouter } from "react-router-dom";
import FirstStep from "./pages/firstStep";
import SecondStep from "./pages/secondStep";
import ThirdStep from "./pages/thirdStep";
import FourthStep from "./pages/fourthStep";
import FifthStep from "./pages/fifthStep";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FirstStep />} />
        <Route path="second_step" element={<SecondStep/>}/>
        <Route path="third_step" element={<ThirdStep/>}/>
        <Route path="fourth_step" element={<FourthStep/>}/>
        <Route path="fifth_step" element ={<FifthStep/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
