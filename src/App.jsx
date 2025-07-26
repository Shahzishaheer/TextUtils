import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import "../src/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null);

  function Showalert(message, type) {
    setalert({
      msg: message,
      Type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const [mode, setmode] = useState("light");
  const Changemode = () => {
    // console.log('fds')
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e416c";
      Showalert("dark mode Enable", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      Showalert("light mode Enable", "success");
    }
    // setmode(mode=="light"?"dark":"light")
    //   document.body.style.backgroundColor= mode=="light"?"#2e416c":"white";
  };
  const [Mode, setMode] = useState("light");

  const changeMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#20c997";
      document.title = "TextUtils-dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils-light";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title=" TextUlis"
          home="Home"
          about="About Us"
          bg={mode}
          modeChanger={Changemode}
          Mode={Mode}
          Changed={changeMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <Textform
                  heading="Text Analysis"
                  bg={mode}
                  modeChanger={Changemode}
                  show={Showalert}
                  Mode={Mode}
                  Changed={changeMode}
                />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
