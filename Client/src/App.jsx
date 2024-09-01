import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, RouterProvider } from 'react-router-dom';
import router from './Router';

const App = () => {
   return (
    <RouterProvider router={router} />
   );
};
 
export default App;
