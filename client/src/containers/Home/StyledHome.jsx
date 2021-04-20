import styled from 'styled-components';

export const StyledHome = styled.div`
    padding-top: 100px;

    .container{
        display: flex;
        margin-top: 25px;
    }

    .filtro{
        width: 20%;
        position: fixed;
    }

    .cards{
        width: 80%;
        padding-top: 20px;
        margin-left: 20%;
    }    

    .cards-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        /* padding: 40px; */
    }

    .paginationButtons{
        list-style: none;
        display: flex;
        justify-content: center; 
        align-items: center;
        flex-wrap: wrap;
        min-height: 150px;
        margin-bottom: 30px;
        padding: 20px;

        a{
            padding: 10px;
            margin: 8px;
            border-radius: 10px;
            border: 1px solid black;
            color: black;
            cursor: pointer;
        }

        & a:hover{
            background-color: var(--color);
        }

    }

    .paginationActive{
        a{
        background-color: var(--color);
        }
    }

@media (max-width: 900px){
    .container{
        margin-top: 70px;
    }

    .filtro{
        width: 30%;
    }

    .cards{
        width: 70%;
        margin-left: 30%;
    } 
}

@media (max-width: 770px){

    .container{
        flex-direction: column;
    }

    .filtro{
        max-width: 500px;
        width: 90%;
        position: unset;
        margin: auto;
    }

    .cards{
        width: 90%;
        margin: auto;
    }
}

@media (max-width: 770px){
    .paginationButtons{
        min-height: 200px;
    }

}
`