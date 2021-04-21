import styled from 'styled-components';

export const StyledLanding = styled.div`
    background-image: url("https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;    
    position: relative;

    .container{
        position: absolute;
        top: 50%;
        left: 200px;
        padding: 0 30px;
        transform: translateY(-50%);
        text-shadow: 0px 0px 10px black, 0px 0px 50px black;
    }
    a{
        color: white;
        font-size: 20px;
        text-decoration: none;
        border: 3px solid white;
        padding: 10px 35px;
        transition: background-color 200ms ease;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

        &:hover{
            background-color: white;
            color: black;
        text-shadow: none;

        }
    }
    h1{
        color: white;
        margin-bottom: 40px;
        text-align: center;
        font-size: 60px;
        line-height: 1.2;
    }

    @media (max-width: 1200px){
        .container{
            left: 0;
            }
    }

`