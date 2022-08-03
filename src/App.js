import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/about';
import { Main } from './components/main';
import { Tours } from './components/tours';
import { Contact } from './components/contact'
import { TourInfo } from './components/tour_info';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element= { <Main /> }></Route>
    <Route path='/tours' element = { <Tours /> }></Route>
    <Route path='/about' element = { <About /> }></Route>
    <Route path='/contact' element = { <Contact /> }></Route>
    <Route path='/tour/:id' element = { <TourInfo /> }></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
