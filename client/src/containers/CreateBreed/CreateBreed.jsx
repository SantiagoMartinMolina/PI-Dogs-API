import React, { useEffect, useState } from 'react';
import { StyledCreateBreed } from './StyledCreateBreed';
import { useDispatch } from "react-redux";
import { getBreeds } from '../../Redux/Actions/index';
import axios from '../../axios';
import CreateBreedModal from './CreateBreedModal';



function CreateBreed() {

    const dispatch = useDispatch();

    const [temps, setTemps] = useState([]); // temps = [{id:1, name: 'Alert'},{},{}]
    const [selectedTemp, setSelectedTemp] = useState('');
    const [input, setInput] = useState({

        temperaments: [],
        name: '',
        weight: '',
        height: '',
        life_span: ''
    });
    const [showModal, setShowModal] = useState({ created: false, temp: false });


    useEffect(() => {
        // var idP= props.breeds[props.breeds.length-1].id;
        async function getTemps() {
            let t = (await axios.get('/temperament')).data;
            setTemps(t);
        }
        getTemps();
    }, [])

    const handleChange = (ev) => {

        setInput({
            ...input,
            [ev.target.name]: ev.target.value,
        });
    };
    const handleSubmit = (ev) => {
        ev.preventDefault();

        axios.post("/dog", input).then((res) => {
            if (res.status === 200) {
                setShowModal({
                    ...showModal,
                    created: true
                })
                dispatch(getBreeds())
            }
        })
            .catch(() => {
                setShowModal({
                    ...showModal,
                    temp: true
                })
            })

        setInput({
            ...input,
            temperaments: []
        });

    };

    const handleChangeTemp = (ev) => {

        setSelectedTemp(
            ev.target.value
        );

        if (ev.target.value) {

            if (!input.temperaments.includes(ev.target.value)) {
                setInput({
                    ...input,
                    temperaments: [...input.temperaments, ev.target.value]
                })
            }
        }

    };

    function getNames(arr) {
        let names = [];
        temps.forEach((t) => {
            arr.forEach((id) => {
                if (parseInt(id) === t.id) {
                    names.push({ id: t.id, name: t.name })
                }
            })

        })
        return names;
    }
    const deleteTemp = (id) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(temp => parseInt(temp) !== id)
        })

    }
    return (

        <StyledCreateBreed>
            <CreateBreedModal setShowModal={setShowModal} showModal={showModal} />
            <div className='form'>

                <h1>Create Breed</h1>
                <form className='form-top' id='form-top' onSubmit={handleSubmit}>

                    <input
                        required
                        name='name'
                        type='text'
                        value={input.name}
                        placeholder='Name'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='weight'
                        type='number'
                        value={input.weight}
                        placeholder='Weight'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='height'
                        type='number'
                        value={input.height}
                        placeholder='Height'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='life_span'
                        type='number'
                        value={input.life_span}
                        placeholder='Life span'
                        onChange={handleChange}
                    />

                    <select onChange={handleChangeTemp} name="temperaments" value={selectedTemp}  >
                        <option value=''>Select temperaments</option>
                        {
                            temps.map((t) => (
                                <option value={t.id} key={t.id}>{t.name}</option>
                            ))
                        }
                    </select>
                    <div className='temp-container'>
                        {
                            getNames(input.temperaments).map((t) => (
                                <p key={t.id}>{t.name} <button onClick={() => deleteTemp(t.id)}><i className="fas fa-times"></i></button></p>
                            ))
                        }
                    </div>

                    <input className='submit' type="submit" value='Create' />

                </form>
            </div>

            {/* <img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=632&q=80" alt="" /> */}

            <div className='img-container' />


        </StyledCreateBreed>
    )

}

export default CreateBreed;