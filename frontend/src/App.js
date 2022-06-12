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
import WaitingForm from "./screens/WaitingForm";
import WaitingList from "./screens/WaitingList";
import HalfDayRegister from "./screens/HalfDayRegistrations";
import HalfDayList from "./screens/HalfDayList";
import ExtendScreen from "./screens/Extend";
import ChangeSeatScreen from "./screens/ChangeSeat";

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
              <Route path="/waiting-form" element={<WaitingForm />}></Route>
              <Route path="/waiting-list" element={<WaitingList />}></Route>
              <Route path="half-day/list" element={<HalfDayList />}></Route>
              <Route
                path="/half-day/register"
                element={<HalfDayRegister />}
              ></Route>
              <Route path="/extend" element={<ExtendScreen />}></Route>
              <Route path="/change-seat" element={<ChangeSeatScreen />}></Route>
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
