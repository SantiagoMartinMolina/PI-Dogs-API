import styled from 'styled-components';

export const StyledAbout = styled.div`
    margin: 125px auto 30px;
    padding: 25px;
    max-width: 800px;
    width: 90%;
    border-radius: 10px;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
    border: 2px solid var(--color);
    background-color: #f8d8ba;

    .about{
        h1{
            margin-bottom: 10px;
        }
        a{
            color: black;
            font-weight: bold;
        }

        p:last-child{
            margin-top: 10px;
        }
    }

    .tech-title{
        margin-top: 20px;   

    }

    .tech-container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        /* margin-top: 10px; */
        margin-bottom: 20px;

        div{
            margin: 20px;
            h1{
                font-size: 15px;
            }
        }

        img{
            width: 45px;
            height: 45px;
        }

    }

    .social-media{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        div{
            margin: 20px;
            font-size: 30px;
            a{
                color: black;
                font-size: 20px;
                display: block;
            }
        }
    }

    .email{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            margin: 0px;
            margin-right: 20px;
            padding-right: 20px;
            font-size: 25px;
            border-right: 2px solid black;
        }
        
    }

@media (max-width: 900px){
    margin: 200px auto 30px;
}

@media (max-width: 470px){

    .social-media{
        margin-bottom: 20px;
        div{
            margin: 10px;
            a{
                font-size: 15px;
            }

        }
    }

    .email{
        flex-direction: column;
        
        div{
            padding: 0;
            border-right: 0;
            margin: 0;
            p{
                font-size: 15px;
            }
        }
    }

}
`