import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <Helmet>
        <title>Laxman's Portfolio</title>
      </Helmet>
      <div className="">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
