import styled from "styled-components";

import backDesktop from '../../assets/background-home-desktop.jpg'
import backTablet from '../../assets/background-home-tablet.jpg'
import backMovile from '../../assets/background-home-mobile.jpg'



export const ContainerHome = styled.div`
    background-color: #0B0D17;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${backMovile});
    width: 100%;
    display: flex;
    flex-direction: column;
    @media(min-width: 600px){
        background-image: url(${backTablet});
        //height: 100%;
    }
    @media(min-width: 900px){
        background-image: url(${backDesktop});
        align-items: space-between;
        justify-content: flex-end;
        height: 100vh;
    }
`;

export const DivBody = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(min-width: 600px){
    }
    @media(min-width: 900px){
        flex-direction: row;
        justify-content: space-between;
        height: 70%;
        margin-left: 10%;
        margin-right: 10%;
    }
`;

export const TitleSmall = styled.h1`
    font-family: Barlow Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 2.7px;
    color: #D0D6F9;
    margin-bottom: 32px;
    @media(min-width: 900px){
        text-align: left;
    }
`;

export const TitleBig = styled.div`
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 100px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 32px;
    @media(min-width: 600px){
        font-size: 150px;
        margin-bottom: 62px;
        margin-top: 30px;
    }
    @media(min-width: 900px){
        text-align: left;
    }
`;

export const MainText = styled.div`
    font-family: Barlow;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    color: #D0D6F9;
    @media(min-width: 900px){
        text-align: left;
        width: 95%;
    }
`;

export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 120px;
    margin-left: 24px;
    margin-right: 24px;
    width: 80%;
    max-width: 327px; 
    align-self: center;
    justify-content: space-between;
    align-content: center;
    @media(min-width: 600px){
        width: 80%;
        max-width: 450px;
        margin-top: 150px; 
    }
    @media(min-width: 900px){
        margin-top: 0px;
        width: 450px;
    }
`;

export const CircleExplore = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: #FFFFFF;
    margin-top: 81px;
    margin-bottom: 50px;
    
    font-family: Bellefair;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 1.25px;
    color: #0B0D17;
    @media(min-width: 900px){
        width: 274px;
        height: 274px;
        font-size: 32px;
        margin-top: 91px;
        border-radius: 300px
    }
    border-radius: 100px
`;