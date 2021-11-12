import NavbarHome from './Navbar';
import Mainbody from './Mainbody';
import './App.css';
import {Button} from 'react-bootstrap';


function App() {
  return (
    <div className="App-fullpage">
      <NavbarHome/>
    <h1 className="font-link" style={{color:"white" ,fontSize:"80px", marginTop:"2em", alignSelf:"center"}}>Build Your Company with <br/>&emsp;&emsp;&emsp;&emsp;Genshin</h1>
    <p className="font-text" style={{ marginTop:"3em", alignSelf:"center"}}>Genshin Delivers Blazing Fast and Striking Hiring </p>
    <p style={{ fontSize:"40px", marginTop:"2em", alignSelf:"center"}}>Ready to Take Your Company To Next Level</p>
    <Button variant="secondary" style={{marginTop:"1em",width:"15em",height:"4em",alignSelf:"center",borderRadius:"5px"}}>Talk To Us</Button>

     <Mainbody/>
  </div>
  );
}


export default App;
//<a href="#"><p className="font-text" style={{textAlign:"center",fontWeight:"bold",color:"orange"}}>Talk To Us.</p></a>