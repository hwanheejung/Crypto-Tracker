import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coins from "./Coins";
import Coin from "./Coin";
import Chart from "./Chart";
import Price from "./Price";

function BrowserRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}>
          <Route path="chart" element={<Chart />}></Route>
          <Route path="price" element={<Price />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default BrowserRouter;
