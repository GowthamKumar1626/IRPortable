import {Route, Routes} from "react-router-dom";
import Body from "./components/Body/Body";
import "./App.css";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Body/> } />
            <Route path={"/:patientID"} element={<PatientDashboard/>} />
        </Routes>
    </div>
  );
}

export default App;
