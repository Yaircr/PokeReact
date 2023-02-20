import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp/>', () => {
    test('debe hacer match con el snapshot', () => {
        
        const title= 'Hola, soy Goku';
        const {container} = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar de titulo en un h1', () => {
        
        const title= 'Hola, soy Goku';
        const {container, getByText, getByTestId} = render(<FirstApp title={title}/>);
        //const h1 = container.querySelector('h1');
        expect(getByText(title)).toBeTruthy();
        //expect(h1.innerHTML).toBe(title);
        //expect(h1.innerHTML).toContain(title);
        expect(getByTestId('test-title').innerHTML).toBe(title); //.toContain(title)
    });
    test('debe mostrar el subtitulo mandado por props', () => {
        const title= 'Hola, soy Goku';
        const subtitle= 'Soy un sub';
        const {getByText} = render(<FirstApp title={title} subTitle={subtitle}/>);
        expect(getByText(subtitle)).toBeTruthy();

    })

});