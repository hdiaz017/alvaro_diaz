import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage, HomePage, ShopPage } from './pages/';

function App() {
   return (
      <div className='App'>
         <h1>Alvaro Diaz</h1>
         <hr />

         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='shop' element={<ShopPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
         </Routes>
      </div>
   );
}

export default App;
