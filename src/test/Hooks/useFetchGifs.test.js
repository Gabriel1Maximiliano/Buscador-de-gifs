
import { renderHook ,waitFor} from '@testing-library/react';
import {useFetchGifs} from '../../Hooks/useFetchGifs';


describe('Probando useFetchGifs', () => { 
    const category = 'One Punch'

    test('Debe regresar el estado inicial ', () => { 

    const  { result }=renderHook( () => useFetchGifs( category )  );

    const {images, isLoading, handleEliminate} = result.current;
       expect(images.length).toBe(0);
       expect(isLoading).toBeTruthy()
     })

     test('Debe evaluar que haya imagenes ', async() => { 
  
         const { result } = renderHook( () => useFetchGifs( category ));

         await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
         )
         const {images, isLoading, handleEliminate} = result.current;

       expect( images.length ).toBeGreaterThan(0);
       expect( isLoading ).toBeFalsy()

      })
 })