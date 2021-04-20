import React, { useEffect, useState } from 'react';
import { StyledHome } from './StyledHome';
import { useSelector } from "react-redux";
import Card from '../../components/Card/Card';
import Buscador from '../../components/Buscador/Buscador';
import Filtro from '../../components/Filtro/Filtro';
import Ordenador from '../../components/Ordenador/Ordenador';
import ReactPaginate from 'react-paginate'
import Modal from '../../components/Modal/Modal';
// import { useEffect } from 'react';


function Home() {
    const [title, setTitle] = useState('');
    const [showNoResult, setShowNoResult] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showBreed, setShowBreed] = useState({});


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
                <div className='cards-container'>
                    {title !== '' && <p>{filtered.length} resultados</p>}
                    {
                        displayBreeds.length > 0
                            ?
                            displayBreeds.map((breed) => (
                                <Card key={breed.id} breed={breed} setShowModal={setShowModal} setShowBreed={setShowBreed} />
                            ))
                            :
                            <p>No hayy</p> //HACER COMPONENTE MAS LINDO
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
                    <Filtro setShowNoResult={setShowNoResult} />
                </div>

                <div className='cards'>
                    <div className='buscador'>
                        <Buscador setTitle={setTitle} />
                    </div>
                    {/* {console.log('ESTADO BREEDS', breeds)} */}

                    {

                        loading
                            ? <p>cargando</p> // HACER ESTO MAS LINDO
                            :
                            showNoResult
                                ?
                                <h1>No hay</h1> // HACER COMPONENTE MAS LINDO
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