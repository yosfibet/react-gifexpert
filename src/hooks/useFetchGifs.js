import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';



export const useFetchGifs = ( category ) => {
  
  const [images, setImages] = useState([]);  
  const [isLoading, setIsloading ] = useState( true );

  const getImages = async () => {
    const newImages = await getGifs (category);
    setImages(newImages);
    setIsloading(false);
  }

  
  useEffect( () => {
    getImages();
  }, [])




  return {
    // images: images, la linea de abajo es similar
    images,
    // isLoading: true, la linea de abajo es similar
    isLoading
  }


}
