import React from 'react';
import { Link } from 'react-router-dom';


function Inlogging() {
  return (
    <div className='container-lg'>
        <Link to="/skole" className="rom-boks-link">
      <img src="bilder/Feide.png" class="img-fluid" alt="image"/>
      </Link>
    </div>
  );
}

export default Inlogging;
