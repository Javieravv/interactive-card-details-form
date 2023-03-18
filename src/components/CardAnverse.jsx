import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './css/card-anverse.css';

export const CardAnverse = () => {
    const { appContext, setAppContext } = useContext(AppContext)
    return (
      <section className="cardanverse-container">
          <article className="cardanverse-circles">
              <div></div>
              <div></div>
          </article>
          <article className="cardanverse-number">
              <p>{ appContext.cardNumber.substr(0,4) } { appContext.cardNumber.substr(4,4) } { appContext.cardNumber.substr(8,4) } { appContext.cardNumber.substr(12,4) }</p>
          </article>
          <article className="cardanverse-name">
              <p>{ appContext.cardName }</p>
              <p>{appContext.cardMonthExpiration} / {appContext.cardYearExpiration }</p>
          </article>
      </section>
    )
}
