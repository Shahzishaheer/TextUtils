import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from system preference or local storage if needed
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type, // Fixed naming convention from 'Type' to 'type'
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    showAlert(darkMode ? "Light mode enabled" : "Dark mode enabled", "success");
  };

  return (
    <Router>
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        <Navbar
          title="TextUtils"
          home="Home"
          about="About"
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <div className="pt-20 container mx-auto px-4">
           {/* pt-20 to account for fixed navbar if we decide to fix it, or just spacing */}
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Text Analysis & Converter"
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
