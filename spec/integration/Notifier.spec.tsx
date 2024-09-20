import { render, screen,prettyDOM } from "@testing-library/react";
import { JestStoreProvider } from "../utils/JestStoreProvider";
import * as taskSliceModule from 'src/store/taskSlice'
import { NotifierContainer } from "src/modules/NotifierContainer";
import { List } from "src/components/List";
import ue from '@testing-library/user-event'
import { TaskList } from "src/modules/TaskList";
import { App } from "src/App";
import { Notifier } from "src/components/Notifier";

const itemsMock:Task[] = [
    {id:'0',done:false,header:'mock0'},
    {id:'1',done:false,header:'mock1'},
]
const notificationMock = 'notification mock'

describe('Оповещение при вополнении задачи', () => {

    const userEvent = ue.setup({delay:100,advanceTimers:jest.advanceTimersByTime})

    test('автоматически исчезает с экрана через 2 секунды', async () => {
        const fn = jest.fn();

        render(<Notifier open={true} task="Любая задача" onClose={fn} />);

        jest.runAllTimers();
        
        expect(fn).toBeCalled();
    });

    test('появляется и содержит заголовок задачи',() => {
        const spied = jest.spyOn(taskSliceModule,'getNotification')
        spied.mockReturnValue(notificationMock)
        
        render(<NotifierContainer/>,{wrapper:JestStoreProvider})
        
        const notificationElem = screen.getByText(notificationMock)
        expect(notificationElem).toBeInTheDocument()
        expect(notificationElem).toHaveTextContent(notificationMock) 
    });

    test('одновременно может отображаться только одно-через наблюдение за setTimeout и clearTimeout ',async() => {
        // jest.advanceTimersByTime(3000)

        jest.useRealTimers()
        const onClose = jest.fn()
        const spiedSetTimeout = jest.spyOn(global,'setTimeout')
        const spiedClearTimeout = jest.spyOn(global,'clearTimeout')

        const {unmount} = render(<Notifier open task='task1' onClose={onClose}/>)
        
        unmount()
        render(<Notifier open task="task2" onClose={onClose}/>)

        expect(spiedSetTimeout).toHaveBeenCalledTimes(2)
        
        expect(spiedClearTimeout).toHaveBeenCalledTimes(1)
        screen.debug()
    })
    test.only('одновременно может отображаться только одно-через поиск класса блекаута',async() => {
        const onClose = jest.fn()
        const {unmount} = render(<Notifier open task='task1' onClose={onClose}/>)
        
        const notifier = screen.getByText('task1')
        const blackoutElem = notifier.closest('.blackout')

        expect(blackoutElem).toBeInTheDocument()
    })

    
});