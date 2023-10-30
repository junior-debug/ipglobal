// App.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyList } from "./pages/MyList";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/MyList" element={<MyList></MyList>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
