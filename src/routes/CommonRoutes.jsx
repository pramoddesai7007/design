import React from 'react';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import AppRoutes from './AppRoutes';

const CommonRoutes = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
};

export default CommonRoutes;
