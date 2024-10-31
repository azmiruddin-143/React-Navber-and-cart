
import Allhosting from "./Components/Header/Hosting/Allhosting"
import Carts2 from "./Components/Header/Hosting/Carts2";
import Charts from "./Components/Header/Hosting/Charts";
import Navber from "./Components/Header/Navber"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const alerttost = (name) => {
    toast.success(` Successful! ${name.name}`, {
      className: 'toast-border', // Custom border class
    });
  }

  return (
    <div>
      <ToastContainer position="top-center"   />
      <Navber></Navber>
      <Allhosting alerttost ={alerttost}></Allhosting>
      <Charts></Charts>
      <Carts2></Carts2>
    </div>

  )
}



export default App
