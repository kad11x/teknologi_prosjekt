import React from 'react';
import RomBoks from './RomBoks';

function Skole() {
  return (
    <div className="skole-container">
      <div className="rom-grid">
        <RomBoks tekst="Dataingeniør" bildePath="bilder/dataingeior1.jpg" link="/dataingeior" />
        <RomBoks tekst="Lærer" bildePath="bilder/lærer2.jpg" link="/lærer" />
        <RomBoks tekst="Musikk" bildePath="bilder/musikk4.jpg" link="/musikk" />
        <RomBoks tekst="Økonom" bildePath="bilder/økonom3.jpg" link="/økonom" />
      </div>
      <div className="info-section">
        <p>Viktig info: idag har det blitt brann i halden sentrum!!</p>
        <p>Viktig info</p>
      </div>
    </div>
  );
}

export default Skole;
