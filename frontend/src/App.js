import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Navbar from "./components/Navbar"

function App() {
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });
 

    useEffect(() => {
        fetch("/data").then((res) =>
            res.json().then((data) => {
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);
 
    return (
        <div className="App">
            <Router>
              <Navbar/>
            </Router>
        </div>
    );
}
 
export default App;
