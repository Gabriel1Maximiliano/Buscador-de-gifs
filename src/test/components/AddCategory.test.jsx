import { render , screen,fireEvent} from "@testing-library/react"
import {AddCategory} from '../../components/AddCategory'

describe('Pruebas sobre <AddCategory />', () => {
    test('Debe cambiar el valor de input de texto ', () => {
        render(< AddCategory handleAddCatgories={ () => { } }/> );
        const input = screen.getByRole('textbox');
       fireEvent.input( input,{target:{value:'texto de prueba'}} );

       expect( input.value ).toBe('texto de prueba')

       
    })

    test('debe probar el submit ', () => {
        const inputValue = 'Goku'
        render(< AddCategory handleAddCatgories={ () => { } }/> );
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');
        fireEvent.input( input,{target:{value:inputValue}} );
        fireEvent.submit( form );
        expect( input.value ).toBe('');



    })
    test('Debe llamar a handleAddCatgories con el input indicado', () => {

        const handleAddCatgories = jest.fn();

        const inputValue        = 'Guadalupe';

        render(<AddCategory handleAddCatgories={handleAddCatgories} />);
        
        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}});
        fireEvent.submit( form );
       
        expect( handleAddCatgories ).toHaveBeenCalled();
        expect( handleAddCatgories ).toBeCalledTimes(1);
        expect( handleAddCatgories ).toHaveBeenCalledWith( inputValue );



    })

    test('No debe llamar a handleAddCatgories si el input esta vacío', () => {
        const handleAddCatgories = jest.fn();

        render(<AddCategory handleAddCatgories={handleAddCatgories}/>);

        const input = screen.getByRole('textbox');
        const form  = screen.getByRole('form')
        const inputValue = '';
        window.alert = jest.fn();

        fireEvent.input(input , {target:{value:inputValue}});
        fireEvent.submit( form );
        expect(window.alert.mock.calls.length).toBe(1);
        //expect ( window.alert ).toEqual(alert('Inserte un nombre'));
      



    })
})