// Formulario
import './css/card-form.css';
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CardSend } from './CardSend';

export const CardForm = () => {

    const { appContext, setAppContext, formOk, setFormOk } = useContext(AppContext)

    const { register, handleSubmit, watch, formState: { errors, isValid }, reset, setFocus } = useForm({
        defaultValues: appContext
    });


    const onSubmit = (data) => {
        if ( isValid ) {
            setFormOk (!formOk )
        }
    }

    useEffect(() => {
      const valuesForm = watch ((value) => setAppContext ({...value}))
      if (!formOk) {
        setFocus("cardName", { shouldSelect: true })
        reset()
      }
      return () => valuesForm.unsubscribe()
    }, [watch, formOk])

    if ( formOk ) {
        return (
            <CardSend />
        )
    }

    return (
        <div className="form-container" >
            <form 
                className='form-card'
                onSubmit={handleSubmit (onSubmit)}
            >
                <div className='form-div'>
                    <label>
                        <p className='infoCardItem'>CARDHOLDER NAME</p>
                        <input
                            {...register("cardName", {required: "Por favor ingrese nombre del tarjeta habiente"})}
                            placeholder="Card Name"
                        />
                    </label>
                    <p className='error-form'>{errors.cardName?.message}</p>
                </div>
                <div className='form-div'>
                    <label>
                        <p className='infoCardItem'>CARD NUMBER</p>
                        <input
                            {...register("cardNumber", { 
                                required: "Debe ingresar un número de tarjeta", 
                                maxLength: {
                                    value: 16,
                                    message: "Número de tarjeta de crédito debe ser de 16 dígitos"
                                },
                                minLength: {
                                    value: 16,
                                    message: "La tarjeta de crédito debe tener 16 dígitos"
                                }
                            })
                            }
                            name="cardNumber"
                            placeholder="Card Number"
                            type="number"
                        />
                    </label>
                    <p className='error-form'>{errors.cardNumber?.message}</p>
                </div>
                <div className='card-expdate'>
                    <div className='form-div'>
                        <p className='infoCardItem'>EXP. DATE (MM / YY)</p>
                        <article>
                            <input
                                {...register("cardMonthExpiration", { 
                                    required: "El mes de la tarjeta es obligatorio",
                                    maxLength: {value: 2, message: "Máximo dos números" },
                                    minLength: {value: 2, message: "Mínimo dos números" },
                                    min: {value: 1, message: "Valor mínimo debe ser 1"},
                                    max: {value: 12, message: "Valor máximo debe ser 12"},
                                })}
                                placeholder="MM"
                            />
                            <input
                                {...register("cardYearExpiration", { 
                                    required: "El año de la tarjeta es obligatorio",
                                    maxLength: {value: 2, message: "Máximo dos números" },
                                    minLength: {value: 2, message: "Mínimo dos números" },
                                    min: {value: 20, message: "Año minimo debe ser 20"},
                                    max: {value: 28, message: "Año máximo debe sre 28"},
                                })}
                                placeholder="YY"
                            />
                        </article>
                        <p className='error-form' >{ errors.cardMonthExpiration?.message } </p>
                        <p className='error-form' >{ errors.cardYearExpiration?.message } </p>
                    </div>
                    <div className='form-div'>
                        <p className='infoCardItem'>CVC</p>
                        <article>
                            <input
                                {...register("cardCvc", { 
                                    required: "Ingrese el código de verificación",
                                    maxLength: {value: 3, message: "Máximo tres números" },
                                    minLength: {value: 3, message: "Mínimo tres números" },
                                })}
                                placeholder="e.g. 123"
                            />
                        </article>
                        <p className='error-form'>{errors.cardCvc?.message}</p>
                    </div>
                </div>
                <input
                    type="submit"
                    value="Confirm"
                    className="button"
                />
            </form>
        </div>
    )
}
