import React from 'react';
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <div className='header__top'>
          <div className='header__block'>
              <div className="header__logo">
                <a href="#" className="header__link">
                    <img src="/img/logo_welbex.png" alt="" />
                </a>
              </div>
              <nav className="header__menu">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#" className="header__link">Услуги</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">Виджеты</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">Интеграции</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">Кейсы</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link header__link-last">Сертификаты</a>
                    </li>
                </ul>
              </nav>
          </div>

          <div className='header__block'>
              <div className="header__tel">+7 555 555-55-55</div>
              <div className="header__social">
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#" className="header__link">
                            <img src="/img/telegram.png" alt="telegram" />
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            <img src="/img/viber.png" alt="viber" />
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">
                            <img src="/img/whatsapp.png" alt="whatsapp" />
                        </a>
                    </li>
                </ul>
              </div>
          </div>
      </div>

      <div className="header__botton">
        крупный интегратор CRM в Росcии и ещё 8 странах
      </div>
    </div>
  );
}

export default Header;
