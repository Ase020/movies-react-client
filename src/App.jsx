import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
      <Layout />
    </div>
  );
}

export default App;
