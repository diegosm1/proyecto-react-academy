import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchApi } from '../../helpers/fetch';
import { DivBody } from '../Main/styles';
import { ContainerApod, DivImg, Image, MainText, TitleSmall } from './apod-styles';

export const ApodScreen = () => {

  const [values, setValues] = useState({
    date: "2020-12-31",
    explanation: "The star with an orange tint near top center in this dusty telescopic frame is T Tauri, prototype of the class of T Tauri variable stars.  Next to it (right) is a yellow cosmic cloud historically known as Hind's Variable Nebula (NGC 1555). About 650 light-years away, at the boundary of the local bubble and the Taurus molecular cloud, both star and nebula are seen to vary significantly in brightness but not necessarily at the same time, adding to the mystery of the intriguing region. T Tauri stars are now generally recognized as young (less than a few million years old), sun-like stars still in the early stages of formation. To further complicate the picture, infrared observations indicate that T Tauri itself is part of a multiple system and suggest that the associated Hind's Nebula may also contain a very young stellar object. The well-composed image spans about 8 light-years at the estimated distance of T Tauri.",
    title: "T Tauri and Hind's Variable Nebula",
    url: "https://apod.nasa.gov/apod/image/2202/NGC1555texas2021_1094.jpg"
  });

  const { date, explanation, title, url } = values;

  const handleFetch = async () => {
    const result = await fetchApi("apod");

    setValues({ ...result });

    console.log('Llamada a la api')
  };

  console.log(values);

  useEffect(() => {



  }, [values])


  return (

    <ContainerApod className='text-white animate__animated animate__bounceInLeft' >

      <div className='mt-24 text-center font-barlow text-xl' >
        <h1>{title} </h1>
        <h2>{date}</h2>

        <button onClick={handleFetch} > Presiona Aqui </button>

        <div className='flex flex-row items-start '>
          <img className='w-80 h-80 ml-5 mt-24 mr-5 text-xs' src={url} />
          <p className=' w-70 h-70 mt-24 mr-5'>
            {explanation}
          </p>

        </div>
      </div>


    </ContainerApod>

  );
};
