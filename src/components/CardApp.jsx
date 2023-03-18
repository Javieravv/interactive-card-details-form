import { CardAnverse } from './CardAnverse';
import { CardForm } from './CardForm';
import { CardReverse } from './CardReverse';
import './css/card-app.css';

export const CardApp = () => {
    return (
        <div className="card-container">
            <div className="left-card">
                <div className='card-front'>
                    <CardAnverse />
                </div>
                <div className='card-back'>
                    <CardReverse />
                </div>
            </div>
            <div className="right-card">
                <div className='card-main'>
                    <CardForm />
                </div>
            </div>
        </div>
    )
}
