
//afee

import { getGifs } from "../../../Helpers/getGifs"


describe('Prueba de <getGifs />', () => {
 test('Debe retornar un arreglo de Gifs', async() => {

    const gifs = await getGifs('One Punch');
    expect( gifs.length ).toBeGreaterThan( 0 );

    expect( gifs[0]).toEqual({
           id:expect.any( String ),
        title:expect.any( String ),
          img:expect.any( String )
    }) 
    
 }

 )
})
