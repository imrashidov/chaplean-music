import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
