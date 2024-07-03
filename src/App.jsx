import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
