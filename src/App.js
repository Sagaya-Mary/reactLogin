
import './App.css';
//import Student from './components/Student/Student';
 //import GetRequest from './components/HttpRequest/GetRequest';
// import LifeCycle from './components/LifeCycle';
 import Header from './components/Website/Header';
 import Footer from './components/Website/Footer';
 import RoutersPath from './components/Website/RoutersPath';
//import PostRequest from './components/HttpRequest/PostRequest';
function App() {
  return (
    <div className="App">
     <Header/>
    <RoutersPath/> 
    <Footer/>  
    {/* <LifeCycle/> */}
     {/* <GetRequest/>  */}
    {/* <PostRequest/>  */}
    {/* <Student/> */}
    </div>
  );
}

export default App;
