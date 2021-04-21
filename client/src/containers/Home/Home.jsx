import React, { useEffect, useState } from 'react';
import { StyledHome } from './StyledHome';
import { useDispatch, useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Buscador from '../../components/Buscador/Buscador';
import Filtro from '../../components/Filtro/Filtro';
import Ordenador from '../../components/Ordenador/Ordenador';
import ReactPaginate from 'react-paginate'
import Modal from '../../components/Modal/Modal';
import { setFiltered } from '../../Redux/Actions';
// import { useEffect } from 'react';


function Home() {
    const [title, setTitle] = useState('');
    const [showNoResult, setShowNoResult] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showBreed, setShowBreed] = useState({});

    const dispatch = useDispatch();


    const breedsLoaded = useSelector(state => state.breedsLoaded);
    const filteredBreeds = useSelector(state => state.filteredBreeds);
    const loading = useSelector(state => state.loading);

    // Pagination
    // const [breeds, setBreeds] = useState(filteredBreeds.length > 0 ? filteredBreeds : breedsLoaded);
    // const [breeds, setBreeds] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);

    const breedsPerPage = 10;
    const pagesVisited = pageNumber * breedsPerPage;

    // console.log('ESTO ES DISPLAYBREEDS', displayBreeds);

    // useEffect(() => {
    //     if (filteredBreeds.length > 0) {
    //         setBreeds(filteredBreeds);
    //     } else {
    //         setBreeds(breedsLoaded);
    //     }
    // }, [filteredBreeds, breedsLoaded])
    const [forcedPage, setForcedPage] = useState(false)

    useEffect(() => {
        if (title !== '') {
            setForcedPage(false);
            setForcedPage(true);
            setPageNumber(0);
        }
    }, [title])

    useEffect(() => {
        console.log('holaaa');
        setForcedPage(false);
        setForcedPage(true);
        setPageNumber(0);
    }, [filteredBreeds])


    const [arrayTemps, setArrayTemps] = useState([]);

    const handleClick = (ev, empty) => {
        let filtered = [];
        setShowNoResult(false);

        if (arrayTemps.length === 0) {
            // filtered = breeds;
            dispatch(setFiltered([]));
            return
        }

        if (!empty) {
            breedsLoaded.forEach((b) => {
                let temps = b.temperaments?.map(t => t.name); // ["curious", "active"]
                for (let i = 0; i < arrayTemps.length; i++) {
                    if (!temps.includes(arrayTemps[i])) {
                        return
                    }
                }
                filtered.push(b);
            })

            if (filtered.length === 0) {
                setShowNoResult(true);
            }

        } else {
            setArrayTemps([]);
        }

        dispatch(setFiltered(filtered)); //[{}, {}] --> action a redux
    }


    function renderCards(array) {

        if (array.length === 0) {
            return
        }
        let filtered = array.filter(b => b.name.toLowerCase().includes(title.toLocaleLowerCase()));

        const displayBreeds = filtered.slice(pagesVisited, pagesVisited + breedsPerPage);

        const pageCount = Math.ceil(filtered.length / breedsPerPage);

        function changePage({ selected }) {
            setPageNumber(selected);
        }
        return (
            <>
                {title !== '' || filteredBreeds.length ? <p>{filtered.length} resultados</p> : null}
                <div className='cards-container'>
                    {
                        displayBreeds.length > 0
                            ?
                            displayBreeds.map((breed) => (
                                <Card key={breed.id} breed={breed} setShowModal={setShowModal} setShowBreed={setShowBreed} />
                            ))
                            :
                            <div className='not-found'>
                                <i class="fas fa-search"></i>
                                <h1>No breeds found</h1>
                                <p>Search for a different breed.</p>
                                <button onClick={(ev) => {
                                    handleClick(ev, 'empty');
                                    setTitle('');
                                }}>Try again</button>
                            </div>
                        //<p>No hayy</p> //HACER COMPONENTE MAS LINDO
                    }
                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationButtons"}
                    previousLinkClassName={"previousButton"}
                    nextLinkClassName={"nextButton"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    forcePage={forcedPage ? 0 : null}
                />
            </>
        )
    }
    return (

        <StyledHome>
            <Modal showModal={showModal} setShowModal={setShowModal} breed={showBreed} />
            <div className='container'>
                <div className='filtro'>

                    <Ordenador />
                    <Filtro setShowNoResult={setShowNoResult} handleClick={handleClick} setArrayTemps={setArrayTemps} arrayTemps={arrayTemps} />
                </div>

                <div className='cards'>
                    <div className='buscador'>
                        <Buscador setTitle={setTitle} title={title} />
                    </div>
                    {/* {console.log('ESTADO BREEDS', breeds)} */}

                    {

                        loading
                            ? <p>cargando</p> // HACER ESTO MAS LINDO
                            :
                            showNoResult
                                ?
                                <div className='not-found'>
                                    <i class="fas fa-search"></i>
                                    <h1>No breeds found</h1>
                                    <p>Select another temperament combination.</p>
                                    <button onClick={(ev) => {
                                        setTitle('');
                                        handleClick(ev, 'empty')
                                    }}>Try again</button>
                                </div> // HACER COMPONENTE MAS LINDO
                                :
                                filteredBreeds.length > 0
                                    ? renderCards(filteredBreeds)
                                    : renderCards(breedsLoaded)
                    }
                </div>

            </div>
        </StyledHome>
    )
}

export default Home;