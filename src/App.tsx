import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer, NavBar } from './components';

import { AboutPage, GalleryPage, HomePage, ShopPage } from './pages/';

function App() {
   return (
      <div>
         <NavBar />
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='gallery' element={<GalleryPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
