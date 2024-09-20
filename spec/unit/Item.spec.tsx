import { render,screen,prettyDOM } from "@testing-library/react";
import { Item } from "src/components/Item";
import ue from '@testing-library/user-event'
import { HEADER_LENGTH_ERROR_MESSAGE } from "src/utils/helpers";

const LONG_STRING = 'string that is too long and exceeds 32 symbols for testing purposes'
const NORMAL_STRING = 'some normal string'
const EMPTY_STRING = ''

describe('Элемент списка задач', () => {
    const userEvent = ue.setup({advanceTimers:jest.advanceTimersByTime})

    test.skip('название не должно быть больше 32 символов',() => {
        const onDelete = jest.fn()
        const onToggle = jest.fn()
        
        render(<Item header={LONG_STRING} id="1" done={true} onDelete={onDelete} onToggle={onToggle}/>)
        
        const item = screen.getByText(HEADER_LENGTH_ERROR_MESSAGE)

        expect(item.textContent).toBe(HEADER_LENGTH_ERROR_MESSAGE)
    });
    test('название не должно быть пустым',() => {
        const onDelete = jest.fn()
        const onToggle = jest.fn()
        
        render(<Item header={EMPTY_STRING} id="1" done={false} onDelete={onDelete} onToggle={onToggle}/>)
        
        const item = screen.getByText(HEADER_LENGTH_ERROR_MESSAGE)

        expect(item.textContent).toBe(HEADER_LENGTH_ERROR_MESSAGE)
    });

    test.skip('нельзя удалять невыполненные задачи',async() => {
        const onDelete = jest.fn()
        const onToggle = jest.fn()

        const view = render(<Item header={NORMAL_STRING} id="1" done={false} onToggle={onToggle} onDelete={onDelete}/>)
       
    
        const deleteBtn = view.getByRole('button')
        console.log('deleteBtn: ',prettyDOM(deleteBtn))
        
        expect(deleteBtn).toBeDisabled()
    });

    
});