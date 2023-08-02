
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleApp from './Components/articles/ArticleApp';
import CategoriesApp from './Components/categories/CategoriesApp';
import ScategoriesApp from './Components/scategories/ScategoriesApp';
import Navscroll from './Components/Navscroll';

function App() {
  return (
   <Router>
    <Navscroll/>
    <Routes>
      <Route path="/articles" element={<ArticleApp/>}></Route>
      <Route path="/categories" element={<CategoriesApp/>}></Route>
      <Route path="/scategories" element={<ScategoriesApp/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
