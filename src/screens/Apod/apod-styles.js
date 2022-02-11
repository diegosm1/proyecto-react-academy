
import backDesktop from '../../assets/background-technology-desktop.jpg'
import backTablet from '../../assets/background-technology-mobile.jpg'
import backMovile from '../../assets/background-technology-mobile.jpg'

import styled from 'styled-components'

export const ContainerApod = styled.div`
    background-color: #0B0D17;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backMovile});
    height: 100%;
    width: 100%; 
    display: flex;
    flex-direction: column;
    @media(min-width: 600px){
        background-image: url(${backTablet});
        height: 100%;
        //max-height: 1024px;
    }
    @media(min-width: 900px){
        background-image: url(${backDesktop});
        height: 100vh;
        width: 100%; 
    }
`;
