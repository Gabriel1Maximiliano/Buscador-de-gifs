import { render,screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../Hooks/useFetchGifs";

jest.mock("../../Hooks/useFetchGifs");



describe('probando el componente <GifGrid />', () => {
    const category = 'One Punch';

    test('Debe mostrar el loading al iniciar componente', () => {
           useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true,
            handleEliminate: () => {
                
            }
           })
        render( <GifGrid category={category}/>);
        
        expect(screen.getByText('Cargando...'));
        expect (screen.getByText(category))
    })
    test('Debe mostrar intems cuando se cargan las imágenes', () => {

        const gifs=[
            {
                id:'123',
         title:'Guadalupe',
         img:'https://localhost/guadalupe.jpg'

            },
            {
                id:'456',
         title:'Meme Snadoval',
         img:'https://localhost/meme.jpg'

            }
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:false,
            handleEliminate: () => {
                
            }
           })
        render( <GifGrid category={category}/>);
        
        expect( screen.getAllByRole('img').length  ).toBe(2);
    })
})