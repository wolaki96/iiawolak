import React from 'react';
import resume from '../assets/iiawolak.pdf';






function Nav({ currentPage, handlePageChange }) {
  
  return (
    
      

      <button style={{ color: "#f96d00", fontSize: "25px", fontWeight: "bold", backgroundColor: "transparent", border: "none", textDecoration: "none" }}>
    <a style={{ color: "#f96d00", fontSize: "25px", fontWeight: "bold", opacity: 0.6 }} href={resume} download = "iiawolak.pdf">
       Download Resume
    </a>
</button>
    
  );
}

export default Nav;
