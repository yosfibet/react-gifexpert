import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( [ 'One Punch' ] );
  // console.log(categories);

  const onAddCategory = ( newCategory ) => {
    // Introducir Valorant
    // categories.push(newCategory);

    if (categories.includes( newCategory ) ) return;
    setCategories( [newCategory, ...categories ]);

    // setCategories ( [ ...categories, 'Valorant' ] );

  };

  return(
    <>
  
      <h1>GifExpertApp</h1>

      
      <AddCategory 
        onNewCategory= { (value) => onAddCategory(value)}
      />
            
      { 
        categories.map( category => (
          <GifGrid key={ category }
          category={ category } />          
        )) 

      }


    </>

  );   

};