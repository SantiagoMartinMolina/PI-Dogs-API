import styled from 'styled-components';

export const StyledLanding = styled.div`
    background-image: url("https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;    
    display: flex;
    align-items: center;    
    justify-content: flex-start; 

    .container{
        /* background-color: red; */
        margin-left: 180px;
    }
    a{
        color: white;
        font-size: 20px;
        text-decoration: none;
        border: 3px solid white;
        padding: 10px 35px;
        transition: background-color 200ms ease;

        &:hover{
            background-color: white;
            color: black;
        }
    }
    h1{
        color: white;
        margin-bottom: 40px;
        text-align: center;
        font-size: 60px;
        
    }

`