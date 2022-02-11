import React from "react";
import 'animate.css';
import { useState } from "react";
import { NavBar } from "../../components/ui/NavBar";
import { fetchApi } from "../../helpers/fetch";
import { CircleExplore, ContainerHome, DivBody, DivText, MainText, TitleBig, TitleSmall } from "./styles";
import { NavLink } from "react-router-dom";

export const MainScreen = () => {

    return (

        <ContainerHome className="animate__animated animate__bounceInLeft" >
            <DivBody>
                <DivText>

                    <TitleSmall>Travel Around Space</TitleSmall>

                    <TitleBig>Space</TitleBig>

                    <MainText>
                        Let’s face it; if you want to go to space, you might as well
                        genuinely go to outer space and not hover kind of on the edge of it.
                        Well sit back, and relax because we’ll give you a truly out of this
                        world experience!
                    </MainText>

                </DivText>

                <CircleExplore className="hover:w-64">
                   <NavLink to='/apod'>Explorar</NavLink> 
                </CircleExplore>

            </DivBody>
        </ContainerHome>

    );
};
