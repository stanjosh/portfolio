import "./App.css";
import Header from "./components/Header.component";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <main>

        <Outlet />

      </main>
      <footer>
        <p>&copy; 2023 stanj</p>
      </footer>
    </>
  );
}

export default App;
