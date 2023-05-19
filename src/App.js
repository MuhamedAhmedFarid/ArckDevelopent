// import Header from "../ui/Header";
import Header from './components/ui/Header'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import theme from './components/ui/Theme'
import Footer from './components/ui/Footer';
 function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<div style={{height: '1000px'}}>Home</div>} />
          <Route path="/service" element={<div>service</div>} />
          <Route path="/customesoftware" element={<div>customsogtware</div>} />
          <Route path="/mobileapps" element={<div>mobielaps</div>} />
          <Route path="/websites" element={<div>websites</div>} />
          <Route path="/revolution" element={<div>revolution</div>} />
          <Route path="/about" element={<div>about</div>} />
          <Route path="/contact" element={<div>contact</div>} />
          <Route path="/estimate" element={<div>estimate</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
