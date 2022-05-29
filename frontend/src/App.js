import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Edit from "./components/Edit";
import Success from "./components/Success";
import ViewSeats from "./screens/ViewSeats";
import Search from "./screens/Search";
import ExpireScreen from "./screens/Expire";
import StudentsList from "./screens/StudentsList";

function App() {
  return (
    <>
      <Router>
        <Header />

        <main>
          <Container>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/success" element={<Success />}></Route>
              <Route path="/view-seats" element={<ViewSeats />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/search" element={<Search />}></Route>
              <Route path="/expire" element={<ExpireScreen />}></Route>
              <Route path="/all-students" element={<StudentsList />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
