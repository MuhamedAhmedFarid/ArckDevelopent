// import Header from "../ui/Header";
import Header from './ui/Header'

import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {  ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/core';
import theme from "./ui/Theme";
import Hook from "./ui/Hook";
 function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
      <Header />
    
        <Routes>
          <Route exact path="/" element={<div>Home</div>} />
          <Route path="/service" element={<div>service</div>} />
          <Route path="/customesoftware" element={<div>customsogtware</div>} />
          <Route path="/mobileapps" element={<div>mobielaps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>
        <Hook/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
