import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, NavBar } from './components';
import './App.css';

import { ImagePage, GalleryPage, HomePage, ShopPage, CartPage } from './pages/';

function App() {
   return (
      <div>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='image/:id' element={<ImagePage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='gallery' element={<GalleryPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
