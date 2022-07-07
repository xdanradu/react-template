import React, { lazy, Suspense } from 'react';
import Sidebar from './organisms/Sidebar';
import Main from './Main';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

import './app.module.scss';
const TopNavbar = lazy(() => import('./organisms/top-navbar/navbar'));

export function App() {
  return (
      <>
        <Suspense fallback={<div>Loading... </div>}>
          <TopNavbar />
        </Suspense>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </>
  );
}

export default App;
