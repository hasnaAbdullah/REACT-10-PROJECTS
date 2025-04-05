import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import "./App.css";
import ContactForm from "./Components/ContactForm/ContactForm";
function App() {
  return (
    <div className="app">
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
