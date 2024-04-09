import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import SearchStudent from './components/SearchStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentLogin from './components/StudentLogin';
import Branch from './components/Branch';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/login' element={<StudentLogin/>}/>
   <Route path='/branch' element={<Branch/>}/>
    <Route path='/' element={<Student/>}/>
    <Route path='/search' element ={<SearchStudent/>}/>
    
   </Routes>

   </BrowserRouter>
  );
}

export default App;
