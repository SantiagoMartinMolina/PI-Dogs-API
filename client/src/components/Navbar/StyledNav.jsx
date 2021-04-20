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
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
}

.list-item a {
    color: inherit;
    height: 100%;
    padding: 16px 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    text-decoration: none;
    border-radius: 20px;
    transition: background-color 250ms ease;
    font-weight: bold;
}

.list-item a:hover{
    background-color: var(--color);
    color: black;
    font-weight: bold;
    /* transform: scale(1.02); */
}
`