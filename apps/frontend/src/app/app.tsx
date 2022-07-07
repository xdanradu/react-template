// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './organisms/Sidebar';
import Main from './Main';
import Header from './organisms/Header';
import Footer from './organisms/Footer';
// const NavBar = lazy(() => import('./organisms/navbar/navbar'));
// const Home = lazy(() => import('./pages/home/home'));
// const Contact = lazy(() => import('./pages/contact/contact'));
import './app.module.scss';

export function App() {
  return (
      <>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </>
  );
}

export default App;
