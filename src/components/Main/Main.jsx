import React from 'react';
import './Main.scss'

function Main() {
  return (
    <div className='main'>
      <div className="main__welbex">
        <div className="main__title">Зарабатывайте больше <span className='gradient'>с WELBEX</span></div>
        <div className="main__content">Развиваем и контролируем продажи за вас</div>
      </div>

      <div className="main__info">
        <div className="main__text">Вместе с <span className='gradient mini'>БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</div>

        <div className="main__block">
            <ul className="main__list">
                <li className="main__item title">Виджеты</li>
                <li className="main__item">30 готовых решений</li>
            </ul>
            <ul className="main__list">
                <li className="main__item title">Dashboard</li>
                <li className="main__item">с показателями вашего бизнеса</li>
            </ul>
            <ul className="main__list">
                <li className="main__item title">Skype Аудит</li>
                <li className="main__item">отдела продаж и CRM системы</li>
            </ul>
            <ul className="main__list">
                <li className="main__item title">35 дней</li>
                <li className="main__item">использования CRM</li>
            </ul>
        </div>

        <div className="main__block-mini">
            <ul className="main__list-mini">
                <li className="main__item-mini">Skype аудит</li>
            </ul>
            <ul className="main__list-mini">
                <li className="main__item-mini">30 виджетов</li>
            </ul>
            <ul className="main__list-mini">
                <li className="main__item-mini">Dashboard</li>
            </ul>
            <ul className="main__list-mini">
                <li className="main__item-mini">Месяц аmoCRM</li>
            </ul>
        </div>

        <div className="main__btn">
          Получить консультацию
        </div>
      </div>
    </div>
  );
}

export default Main;
