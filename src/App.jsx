import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Playingvideo from "./components/Playingvideo";



function App() {

  return (
    <>
      <Navbar />
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/search/:searchQuery" element={<Search/>}/>
<Route path="/video/:id" element={<Playingvideo/>}/>
    </Routes>
    </>
  );
}

export default App;
