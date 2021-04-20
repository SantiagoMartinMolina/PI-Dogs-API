import styled from 'styled-components';

export const StyledAbout = styled.div`
    margin: 125px auto 30px;

    .tech-container{
        display: flex;
        justify-content: center;
        padding: 15px;

        div{
            margin: 20px;
            h1{
                font-size: 20px;
            }
        }

        img{
            width: 50px;
            height: 50px;
        }

    }

    .social-media{
        display: flex;
        justify-content: center;

        div{
            margin: 20px;
            font-size: 30px;
        }
    }

    .email{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            margin: 20px;
            padding: 20px;
            font-size: 30px;
            border-right: 2px solid black;
        }
    }
`