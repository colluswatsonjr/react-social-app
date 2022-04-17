import '../App.css';
import Topbar from './Topbar'
import Leftbar from './Leftbar';
import Middlebar from './Middlebar';
import Rightbar from './Rightbar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Leftbar />
      <Middlebar />
      <Rightbar />
      <Footer />
    </div>
  );
}

export default App;
