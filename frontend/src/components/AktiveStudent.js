import React, { useState, useEffect, useRef } from 'react';
import './AktivStudent.css'
import CryptoJS from 'crypto-js';
import Navbar from './Navbar';
import Chatt from './Chatt';


function AktivStudent() {
  const users = [
    { name: 'Ole Jensen', online: true },
  { name: 'Anna Hansen', online: true },
  { name: 'Kristian Larsen', online: false },
  { name: 'Lene Pedersen', online: false },
  { name: 'Thomas Nielsen', online: true },
  { name: 'Emma Johansen', online: true },
  { name: 'Morten Knudsen', online: false },
  { name: 'Maria Christensen', online: false },
  { name: 'Anders Madsen', online: true },
  { name: 'Mette Rasmussen', online: true },
  { name: 'Lars Schmidt', online: false },
  { name: 'Ida Kristensen', online: false },
  { name: 'Peter Svendsen', online: true },
  { name: 'Karin Mortensen', online: true },
  { name: 'Jan Thomsen', online: false },
  { name: 'Sofia Poulsen', online: false },
  { name: 'Martin Jakobsen', online: true },
  { name: 'Inger Iversen', online: true },
  { name: 'Henrik Andreasen', online: false },
  { name: 'Charlotte Frederiksen', online: false },
  { name: 'Søren Møller', online: true },
  { name: 'Ellen Dahl', online: true },
  { name: 'Steffen Eriksen', online: false },
  { name: 'Lotte Jensen', online: false },
  { name: 'Jonas Bertelsen', online: true },
  { name: 'Julie Jeppesen', online: true },
  { name: 'Daniel Holm', online: false },
  { name: 'Mia Nielsen', online: false },
  { name: 'Lucas Mikkelsen', online: true },
  { name: 'Marie Olsen', online: true },
  { name: 'Sebastian Sørensen', online: false },
  { name: 'Pernille Ludvigsen', online: false },
  { name: 'Mathias Skov', online: true },
  { name: 'Freja Gregersen', online: true },
  { name: 'Simon Dam', online: false },
  { name: 'Emilie Kjær', online: false },
  { name: 'Rasmus Jørgensen', online: true },
  { name: 'Nanna Simonsen', online: true },
  { name: 'Alexander Overgaard', online: false },
  { name: 'Laura Bach', online: false },
  { name: 'Mikkel Henriksen', online: true },
  { name: 'Sara Wind', online: true },
  { name: 'Victor Krogh', online: false },
  { name: 'Mathilde Ravn', online: false },
  { name: 'Benjamin Lang', online: true },
  { name: 'Cecilie Bjerre', online: true },
  { name: 'Marcus Laursen', online: false },
  { name: 'Rebecca Clausen', online: false },
  { name: 'Niklas Markussen', online: true },
  { name: 'Sille Troelsen', online: true },
  { name: 'August Vinter', online: false },
  { name: 'Louise Hansen', online: false }
  ];

  function handleScrollTo(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const container = document.querySelector('.scrollspy-example');
      if (container) {
        container.scrollTop = targetElement.offsetTop;
      }
    }
  }

  function displayQuestInfo(questNumber) {

    alert(`This is some placehol der content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
${questNumber}`);
  }

  const sortedUsers = users.sort((a, b) => b.online - a.online);




  return (
    <>
    <Navbar/>
    <div className="aktiv-student-container">
        <div className="users-section">
            {sortedUsers.map(user => (
                <div className="user-row" key={user.name}>
                    <div className={`status-circle ${user.online ? 'online' : 'offline'}`}></div>
                    <span className="user-name">{user.name}</span>
                </div>
            ))}
        </div>
        <div className="content-wrapper">
          <div className="row">
            <div className="col-4">
              <div id="list-example" class="list-group">
              <button className="list-group-item list-group-item-action action" onClick={() => handleScrollTo('list-item-1')}>Quest1</button>
              <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar" style={{ width: '50%' }}>50%</div>
            </div>
              <button className="list-group-item list-group-item-action" onClick={() => handleScrollTo('list-item-2')}>Quest2</button>
                <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: '25%' }}>25%</div>
                </div>
              <button className="list-group-item list-group-item-action" onClick={() => handleScrollTo('list-item-3')}>Quest3</button>
                <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                  <div className="progress-bar" style={{ width: '100%', backgroundColor: 'green'  }}>Fullført</div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
                <h7 id="list-item-1">Quest1</h7>
                <img src={process.env.PUBLIC_URL + '/bilder/headsett1.jpg'} alt="Quest 1" onClick={() => displayQuestInfo(1)}/>

                <h7 id="list-item-2">Quest2</h7>
                <img src={process.env.PUBLIC_URL + '/bilder/mat1.jpg'} alt="Quest 1" onClick={() => displayQuestInfo(2)}/>
              
                <h7 id="list-item-3">Quest3</h7>
                <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.
                </p>
              </div>
            </div>
          </div>



            <div className="threads-section">
                <div className="thread">Tråd 1</div>
                <div className="thread">Tråd 4</div>
                <div className="see-more">Se mer</div>
            </div>

            <div className="chat-section">
       
        <div className="container-xl">
        <Chatt/>
          
        </div>
      </div>
        </div>
    </div>
    
    </>
);
}

export default AktivStudent;