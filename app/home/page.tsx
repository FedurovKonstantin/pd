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
      <div className='page-body'>
        <p className="name">Иванов Иван Иванович</p>
        <p className="student-description">Любитель поиграть в игры, 1 курс 3 группа</p>

        {/* О себе */}
        <div>
          <div className="mb-3">
            <label className="form-label">О себе</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={6}>
              Японский геймдизайнер, геймдиректор, сценарист, продюсер и актёр. Кодзима известен своеобразным авторским подходом к созданию игр; ещё до прихода в игровую индустрию он увлекался литературой и кинематографом и позже рассматривал разработку игр как новую возможность для художественного творчества.
            </textarea>
          </div>
        </div>


        {/* Контакты */}
        <div>
          <p className='section-label'>Контакты</p>
          <div className="mb-3">
            <label className="form-label">Почта</label>
            <input type="email" className="form-control" id="email" placeholder="little_ponny@sfedu.ru" />
          </div>
          <div className="mb-3">
            <label className="form-label">Telegram</label>
            <input type="email" className="form-control" id="tg" placeholder="@little_ponny" />
          </div>
          <div className="mb-3">
            <label className="form-label">ВКонтакте</label>
            <input type="email" className="form-control" id="vk" placeholder="@little_ponny" />
          </div>
        </div>

        {/* Навыки */}
        <div>
          <p className='section-label'>Навыки</p>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label">
              IOS
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
            <label className="form-check-label">
              Android
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label">
              Flutter
            </label>
          </div>
        </div>

        {/* Кнопка */}

        <button type="button" className="btn btn-primary save-button">Сохранить</button>
      </div>
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
    <div className='sub-page-nav-bar-background'>
      <div className='sub-page-nav-bar'>
        <ul className="nav nav-tabs">
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

