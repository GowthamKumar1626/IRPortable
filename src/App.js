import {Route, Routes} from "react-router-dom";
import Body from "./components/Body/Body";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import Records from "./components/Records/Records";
import "./App.css";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path={"/"} element={<Body/> } />
            <Route exact path={"/patient/:patientID"} element={<PatientDashboard/>} />
            <Route exact path={'/monthly/records'} element={<Records/>} />
        </Routes>
    </div>
  );
}

export default App;
