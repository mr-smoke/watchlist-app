import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/GlobalState";
import Watched from "./pages/Watched";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <>
      <DataProvider>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
