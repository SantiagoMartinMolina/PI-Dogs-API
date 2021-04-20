import styled from 'styled-components';

export const StyledNav = styled.nav`
width: 100%;
position: fixed;
/* background-color: var(--color2); */
background-color: white;
top: 0;
z-index: 10;

.container{
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: black;
    padding: 10px;
    border-bottom: 2px solid var(--color); 

    .social-media{
        margin: 0 15px;
        font-size: 40px; 
        display: flex;
        align-items: center;
        justify-content: center;       
        a{
            color: #333;
            margin: 10px;
            transition: color 200ms ease;

            &:hover{
                color: var(--color);
                /* color: black; */
            }
            
        }
    }
}


.title{
    font-weight: bold;
}
.list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
}
.list-item {
    margin: 0 5px;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
}

.list-item a {
    color: inherit;
    height: 100%;
    padding: 6px 14px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 250ms ease;
    font-weight: bold;
    border: 2px solid var(--color);
}

.active {
    background-color: var(--color);
}

.list-item a:hover{
    background-color: var(--color);
    color: black;
    font-weight: bold;
    /* transform: scale(1.02); */
}

@media (max-width: 900px){
    .container{
        flex-direction: column;
    }
}

@media (max-width: 650px){
    .social-media{
        /* background-color: green; */
        /* padding: 10px; */
        height: 50px;
        i{
            font-size: 35px;
        }
    }
}
`