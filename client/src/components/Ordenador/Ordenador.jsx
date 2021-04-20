import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ordenar } from '../../Redux/Actions/index';
import { StyledOrdenador } from './StyledOrdenador';




export default function Ordenador() {

    const [selectedOrd, setSelectedOrd] = useState('asc');
    const [selectedCat, setSelectedCat] = useState('name')

    const dispatch = useDispatch();

    function handleChange(ev) {
        if (ev.target.value === 'name' || ev.target.value === 'weight') {
            setSelectedCat(ev.target.value);
        } else {

            setSelectedOrd(ev.target.value);
        }
    }

    function handlesubmit(ev) {
        ev.preventDefault();

        dispatch(ordenar(selectedOrd, selectedCat));

    }
    return (
        <StyledOrdenador onSubmit={handlesubmit}>
            <h1>Ordenar</h1>
            <div>

                <select onChange={handleChange} value={selectedCat} name="order" >
                    <option value='name'>alfabetico</option>
                    <option value='weight'>peso</option>
                </select>

                <select onChange={handleChange} name="by" value={selectedOrd} >
                    <option value='asc'>ascendente</option>
                    <option value='desc'>descendente</option>
                </select>
                <button type='submit'>Ordenar</button>
            </div>

        </StyledOrdenador>
    )
}