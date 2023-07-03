import { useState } from "react";
import Header from "./components/ui/Header";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/ui/Theme";
import Footer from "./components/ui/Footer";
// import LandingPage from "./components/LandingPage";
import LandingPage from './components/LandingPage'

function App() {
  const [value, setValue] = useState(0);
  const [selcted, setSelcted] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selcted={selcted}
          setSelcted={setSelcted}
        />
        <Routes>
          <Route exact path="/" element={ <LandingPage  setValue={setValue} setSelcted={setSelcted} />} />
          <Route path="/service" element={<div>service</div>} />
          <Route path="/customesoftware" element={<div>customsogtware</div>} />
          <Route path="/mobileapps" element={<div>mobielaps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selcted={selcted}
          setSelcted={setSelcted}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
