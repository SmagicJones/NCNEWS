import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <div className="root-layout">
    <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
