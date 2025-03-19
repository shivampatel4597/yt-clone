import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useAuth } from "./context/AuthProvider";


function App() {
  const {loading, data } = useAuth()
  console.log(loading, data)
  return (
    <>
      <Navbar />
      <Sidebar/>
    </>
  );
}

export default App;
