import { Routes, Route } from "react-router-dom";

import MainPage from "./components/Main-page/MainPage";

import InnerPage from "./components/Inner-page/innerpage/InnerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/inner" element={<InnerPage />}></Route>
    </Routes>
  );
}

export default App;
