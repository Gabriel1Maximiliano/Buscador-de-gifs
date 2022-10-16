import { render,screen } from "@testing-library/react"

 import{GifItem} from '../../components/GifItem'
 
 describe('primer Prueba sobre < gifItem />', () => {
    test('probando el metodo container', () => {

        const title ='hola';
        
        const img   ='https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=c6f82f11cvpt7ikruu8ygixmporcfncou0su74bp9llp2u3k&amp;rid=giphy.gif&amp;ct=g';

        const alt="imagen"
        
        const {container} = render(<GifItem title={title} img={img} /> );
      
    })
 })

 describe('segunda prueba sobre <GifItem ></GifItem>', () => {
    test('probando el snapshot', () => {

        const title ='hola';
       
        const img   ='https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=c6f82f11cvpt7ikruu8ygixmporcfncou0su74bp9llp2u3k&amp;rid=giphy.gif&amp;ct=g';

        const alt="imagen"
        const {container} = render(<GifItem title={title} img={img} /> );
        expect( container ).toMatchSnapshot();
        
    })
 })

 describe('probando el render con debug sobre <Gifitem></Gifitem>', () => {

    test('debe usar debug para ver componente', () => {

        const title ='hola';

        const img   ='https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=c6f82f11cvpt7ikruu8ygixmporcfncou0su74bp9llp2u3k&amp;rid=giphy.gif&amp;ct=g';

        const alt="imagen";

      render(<GifItem title={title} img={img}/>);

    })

 })

 describe('Probando el screen', () => {
    test('debe mostrar el valor de URL y ALT de la imagen ', () => {
        const title ='hola';

        const img   ='https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=c6f82f11cvpt7ikruu8ygixmporcfncou0su74bp9llp2u3k&amp;rid=giphy.gif&amp;ct=g';

        const altl="imagen";




        const componente = render(<GifItem title={title} img={img}/>);

        const {src,alt} = screen.getByRole('img');
        expect(src).toBe( img );
        expect(altl).toBe( alt );


    })

    test('Debe mostrar el título', () => {
        const title ='hola';

        const img   ='https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=c6f82f11cvpt7ikruu8ygixmporcfncou0su74bp9llp2u3k&amp;rid=giphy.gif&amp;ct=g';


        render(<GifItem title={title} img={img}/>);

        expect( screen.getByText( title )).toBeTruthy() 

   

    })

 })