import React, { useState } from 'react';
import Nav from './nav';
import School from './pages/school';
import ImageAndTextExample from './pages/about';
import Portfolio from './pages/Portfolio';
import Footer from './pages/footer';
import About from './pages/about'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {
    

    
    return <ImageAndTextExample />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      
      {renderPage()}
      
      
      < Portfolio />
      
      < School />
      

      < Footer />
    </div>
    
  );
}