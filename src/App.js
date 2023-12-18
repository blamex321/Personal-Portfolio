import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Laxman's Portfolio</title>
      </Helmet>
      <div className="gradient-bg-welcome">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
