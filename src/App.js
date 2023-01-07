import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import ChannelInfo from "./pages/ChannelInfo";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div
          style={{ height: "7.5vh", position: "sticky", top: 0, zIndex: 999 }}
        >
          <Navbar />
        </div>
        <ScrollToTop>
          <Routes>
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="channel/:id" element={<ChannelInfo />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
