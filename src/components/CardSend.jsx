// Formulario
import './css/card-send.css';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const CardSend = () => {
    const {formOk, setFormOk, setAppContext } = useContext(AppContext)

    const handleClick = (e) => {
        e.preventDefault()
        setFormOk(!formOk)
        setAppContext({
            cardName: '',
            cardNumber: '',
            cardMonthExpiration: '',
            cardYearExpiration: '',
            cardCvc: ''
        })
    }

    return (
        <div className="form-container-send">
            <img src="/images/icon-complete.svg" alt="" />
            <h2>THANK YOU!</h2>
            <p>We've added your card details</p>
            <input
                    type="submit"
                    value="Continue"
                    className='button'
                    onClick={ handleClick }
            />
        </div>
    )
}
