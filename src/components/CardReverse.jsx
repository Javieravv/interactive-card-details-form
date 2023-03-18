import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './css/card-reverse.css';

export const CardReverse = () => {
    const { appContext, setAppContext } = useContext(AppContext)
    return (
      <section className="cardreverse-container">
          <article className="cardreverse-digitverification">
              <p>{appContext.cardCvc}</p>
          </article>
      </section>
    )
}
