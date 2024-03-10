import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from "./pages/navigate";
import Profiles from "./pages/Profiles";

function App() {
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });
 

    useEffect(() => {
        fetch("http://127.0.0.1:5000/data")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
 
    return (
        <div className="App">
            <Router>
              <Navbar/>
                <Routes>
                    <Route path="/navigate" element={<About/>} />
                    <Route path="/profiles" element={<Profiles/>} />
                </Routes>
            </Router>
        </div>
    );
}
 
export default App;
