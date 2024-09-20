import { render,screen,prettyDOM } from "@testing-library/react";
import { App } from "src/App";
import { JestStoreProvider } from "../utils/JestStoreProvider";
import ue from '@testing-library/user-event'
import * as taskSliceModule from 'src/store/taskSlice'

const tasksMock:Task[] = [
    {id:'0',header:'mock0',done:true},
    {id:'1',header:'mock1',done:false},
    {id:'2',header:'mock2',done:true},
    {id:'3',header:'mock3',done:true},
    {id:'4',header:'mock4',done:false},
]


jest.useRealTimers()

describe('Список задач', () => {
    test('с включенным фильтром не содержит выполненные задачи после нажатия на кнопку фильтрации',async() => {
        // const userEvent = ue.setup({advanceTimers:jest.advanceTimersByTime})    
        const userEvent = ue.setup()    

        const spied = jest.spyOn(taskSliceModule,'tasksSelector')
        spied.mockReturnValue(tasksMock)

        const {rerender} = render(<App />,{wrapper:JestStoreProvider})

        const onlyActiveTasksBtn = screen.getByTestId('onlyActiveTasksBtn')
        await userEvent.click(onlyActiveTasksBtn)

        const taskList = screen.queryAllByRole('listitem')
        expect(taskList).toHaveLength(2)

        await userEvent.click(onlyActiveTasksBtn)
    
        rerender(<App/>)
        const newTaskList = screen.getAllByRole('listitem')
        expect(newTaskList).toHaveLength(5)        
    });
    
    // it.todo('с выключенным фильтром');
});
