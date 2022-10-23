import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Registration from './components/registration';
import {Routes, Route} from "react-router-dom"
import Login from './components/login';
import Fibonacci from './components/fibonacci'

function App() {
  return (
    <div className="App ">
      <Header />
      {/* Define all the routes */}
      <Routes>
          <Route path='/' element = {<Registration />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/fibonacci' element = {<Fibonacci/>} />
      </Routes>
      {/* <Registration /> */}
      <Footer />
    </div>
  );
}

export default App;
