import "./App.css";
import Feed from "./pages/Feed";
import Header from "../src/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideosDetails from "./pages/VideosDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/watch/:videoId" element={<VideosDetails />} />
          <Route path="/results/:query" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
