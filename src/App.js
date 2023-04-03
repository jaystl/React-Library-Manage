import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import LoginAsS from './pages/LoginAsS';
import LoginAsU from './pages/LoginAsU';
import SignupAsS from './pages/SignupAsS';
import SignupAsU from './pages/SignupAsU';
import Home from './pages/Home';
import About from './pages/About';
import BookList from './pages/BookList';
import Category from './pages/Category';
import Cart from './pages/Cart';
import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Userdashboard from './pages/Userdashboard';
import Staffdashboard from'./pages/Staffdashboard';
import PrivaterouteU from './components/PrivaterouteU';
import PrivaterouteS from './components/PrivaterouteS';
import AddnewBook from './components/Addnewbook';
import BookS from './components/BookS';
import BookListS from './components/BookListS';
import Homestaff from './pages/Homestaff';
import MemberList from './components/Memberlist';
import AddMember from './components/AddMember';
import AfterIssue from './pages/Afterissue';
import Afterbookdel from './pages/Afterbookdel';
import Aftermemdel from './pages/Aftermemdel';
import SearchPage from './pages/Searchpage';
import SearchBar from './components/SearchBar';

function App() {
  return (<>
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
     <Route path="/" element={<Home/>}/>
    
     <Route path="/loginass" element={<LoginAsS/>}/>
     <Route path="/loginasu" element={<LoginAsU/>}/>
     <Route path="/signupass" element={<SignupAsS/>}/>
     <Route path="/signupasu" element={<SignupAsU/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/search" element={<SearchBar/>}/>
    
     
     <Route path="/category" element={<Category/>}/>

     <Route path="homestaff" element={<Homestaff/>}/>

     <Route path="/staff" element={<PrivaterouteS/>}>
     <Route path="staffdashboard" element={<Staffdashboard/>}/>
     <Route path="books" element={<BookS/>}/>
     <Route path="addnewbook" element={<AddnewBook/>}/>
     <Route path="booklists" element={<BookListS/>}/>
     <Route path="memberlist" element={<MemberList/>}/>
     <Route path="addmember" element={<AddMember/>}/>
     <Route path="afterbookdel" element={<Afterbookdel/>}/>
     <Route path="aftermemdel" element={<Aftermemdel/>}/>

 

      </Route>

     <Route path="/user" element={<PrivaterouteU/>}>
     <Route path="userdashboard" element={<Userdashboard/>}/>
     <Route path="booklist" element={<BookList/>}/>
     <Route path="cart" element={<Cart/>}/>
     <Route path="afterissue" element={<AfterIssue/>}/>
     
     </Route>
    </Routes>
    </BrowserRouter>                
              </> 
                  
    
                  
  );
}

export default App;
