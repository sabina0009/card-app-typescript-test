import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Switch from "./components/Switch";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const switchMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "rgb(15 23 42)";
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <section>
      <Switch switchMode={switchMode}></Switch>
      <Router>
        <EntryProvider>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
