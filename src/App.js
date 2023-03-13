import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Analyzer" aboutPage="About Page" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading = "Enter The Text To Convert 👇"/> 
      </div>
    </>
  );
}

export default App;

