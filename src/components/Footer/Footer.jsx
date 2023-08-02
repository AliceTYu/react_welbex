import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__bl'>
          <div className="footer__column">
            <div className="footer__title">О компании</div>
            <div className="footer__text">
              <a href="#" className="footer__link">Партнёрская программа</a>
            </div>
            <div className="footer__text">
              <a href="#" className="footer__link">Вакансии</a>
            </div>
          </div>
  
          <div className="footer__column">
            <div className="footer__title">Меню</div>
            <div className='footer__botmenu'>
              <div className="footer__menu">
                <div className="footer__text">
                  <a href="#" className="footer__link">Расчёт стоимости</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Услуги</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Виджеты</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Интеграции</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Наши клиенты</a>
                </div>
              </div>
              <div className="footer__menu">
                <div className="footer__text">
                  <a href="#" className="footer__link">Кейсы</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Благодарственные письма</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Сертификаты</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Блог на Youtube</a>
                </div>
                <div className="footer__text">
                  <a href="#" className="footer__link">Вопрос / Ответ</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__row footer__row-contact">
          <div className="footer__title">Контакты</div>
          <div className='footer__block'>
            <div className='footer__contact'>
              <div className="footer__text">+7 555 555-55-55</div>
              <div className="header__social footer__social">
                    <ul className="header__list header__list-footer">
                        <li className="header__item">
                            <a href="#" className="header__link">
                                <img className='header__link-pic' src="/img/telegram.png" alt="telegram" />
                            </a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">
                                <img className='header__link-pic' src="/img/viber.png" alt="viber" />
                            </a>
                        </li>
                        <li className="header__item">
                            <a href="#" className="header__link">
                                <img className='header__link-pic' src="/img/whatsapp.png" alt="whatsapp" />
                            </a>
                        </li>
                    </ul>
                  </div>
              <div className="footer__text">Москва, Путевой проезд 3с1, к 902</div>
            </div>
            <div className='footer__contact'>
              <div className="footer__welbex">©WELBEX 2022. Все права защищены.</div>
              <div className="footer__welbex underline"><a href="#" className="footer__link">Политика конфиденциальности</a></div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Footer;
