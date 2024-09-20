import { sayHi } from "src/utils/helpers";
import { validateHeaderMax } from "src/utils/helpers";

jest.mock('../../../src/utils/helpers.ts',() => ({
    // sayHi:jest.fn(() => 41)
    sayHi:jest.fn().mockReturnValue(45)
}))

// jest.mock('src/utils/helpers.ts')

test('mock',() => {
    // const result = validateHeaderMax('dads skdj icsajajnc cjw;ASLKCAKLSC IDJFWEIij')
    
    // console.log('res',result)
    const res = sayHi()
    console.log(res)
    // validateHeaderMax('sdf')
})
// describe("Мокирование", () => {
//     test.only('repeat',() => {
//         jest.mock('../../../src/utils/helpers.ts')
//         sayHi()
//     })

//     it("Мокируем функции", () => {
//         const fn = jest.spyOn(console, 'error');
//         fn.mockImplementation(() => 42);
    
//         console.error('Ошибка!');
    
//         expect(fn).toBeCalledWith('Ошибка!');
//         expect(fn).toReturnWith(42);
//     });
    
//     it("Мокируем модули", () => {
//         sayHi();
//         expect(sayHi).toReturnWith('Привет!')
//     });
    
//     it("Мокируем поля объекта", () => {
//         const obj = {
//             name: 'header',
//             value: 'Greetings!'
//         };
    
//         jest.replaceProperty(obj, 'value', 'hello');
//         expect(obj.value).toBe('hello');
//     });
    
//     it("Мокируем таймеры", async () => {
//         const fn = jest.fn(console.log);
    
//         const runTimer = () => {
//             setTimeout(() => {
//                 fn('Таймер выполнился');
//                 runTimer();
//             }, 3000);
    
//             runTimer();
//             jest.runOnlyPendingTimers();
            
//             expect(fn).toBeCalled();
//         }
//     });
// });
