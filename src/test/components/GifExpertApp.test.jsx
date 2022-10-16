import { render,screen } from "@testing-library/react"
import { GifExpertApp } from "../../components/GifExpertApp"

describe('first', () => { 
    test('should first', () => { 

        render(<GifExpertApp />);

        screen.debug();
     })
 })