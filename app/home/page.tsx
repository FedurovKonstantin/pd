'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import { useState } from 'react';
import { ScriptProps } from 'next/script';


export default function Home() {
  const [activeTab, setActiveTab] = useState('commands');

  const handleTabClick = (tab: string) => {
    console.log(tab)
    setActiveTab(tab);
  };



  return (
    <>
      <TopNavBar activeTab={activeTab} handleTabClick={handleTabClick} />
      <SubPageNavBar />
    </>
  );
}



const TopNavBar = (props: { activeTab: String, handleTabClick: Function }) => {

  console.log(props.activeTab)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">ПДКоманды</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => props.handleTabClick('commands')} >
              <a className={`nav-link ${props.activeTab === 'commands' ? 'active' : ''}`}>Команды и студенты</a>
            </li>
            <li className="nav-item" onClick={() => props.handleTabClick('profile')}>
              <a className={`nav-link ${props.activeTab === 'profile' ? 'active' : ''}`}>Профиль</a>
            </li>
            <li className="nav-item" onClick={() => props.handleTabClick('tracks')} >
              <a className={`nav-link ${props.activeTab === 'tracks' ? 'active' : ''}`} >Треки</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};


const SubPageNavBar = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='gray-outer'>
      <div className="gray-block"></div>
      <div className="qwe">
        <ul className="nav nav-pills">
          <li className={`nav-item`} onClick={() => handleTabClick('resume')}>
            <a className={`nav-link ${activeTab === 'resume' ? 'active' : ''}`} aria-current="page">Резюме</a>
          </li>
          <li className={`nav-item`} onClick={() => handleTabClick('responses')}>
            <a className={`nav-link ${activeTab === 'responses' ? 'active' : ''}`}>Отклики</a>
          </li>
          <li className={`nav-item`} onClick={() => handleTabClick('myTeam')}>
            <a className={`nav-link ${activeTab === 'myTeam' ? 'active' : ''}`}>Моя команда</a>
          </li>
          <li className={`nav-item`} onClick={() => handleTabClick('applications')}>
            <a className={`nav-link ${activeTab === 'applications' ? 'active' : ''}`}>Заявки</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

