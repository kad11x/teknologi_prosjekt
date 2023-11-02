import React from 'react';
import { Link } from 'react-router-dom';

function RomBoks({ tekst, bildePath, link }) {
  return (
    <Link to={link} className="rom-boks-link">
      <div className="rom-boks">
          <img src={bildePath} alt={tekst} className="rom-bilde" style={{ objectFit: 'cover' }} />
        <p>{tekst}</p>
      </div>
    </Link>
  );
}

export default RomBoks;
