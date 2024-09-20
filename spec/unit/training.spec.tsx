

// describe('train',() => {
//     test('simple',() => {
//         let a  = NaN
//         expect(a).toBeNaN()
//     })

//     const fn = jest.fn()
//     fn(3)
//     expect(fn).toHaveBeenCalledTimes(1)
//     expect(fn).toHaveBeenCalledWith(3)

//     const fn2 = jest.fn(() => 42)

//     fn2()

//     expect(fn2).toHaveReturnedWith(42)
//     expect(fn2).toHaveLastReturnedWith(42)

//     let ob = {
//         name:'igor'
//     }

//     expect(ob).toHaveProperty('name')
//     expect([1,2,4]).toContain(2)
// })

describe('mocking',() => {
    test.skip('function mocking',() => {
        const fn = jest.fn((a:number,b:number) => 42)
        const context = {
            a:4
        }
        
        // fn.apply(context,[1,3])
        fn(2,34)
        // fn.mockClear()
        console.log(fn.mock)
        fn.mockReset()
        
        fn(5,6)
        console.log(fn.mock)
    })
    test.skip('mock2',async() => {
        // const fn = jest.fn().mockImplementationOnce(() => 42)
        // const fn = jest.fn().mockResolvedValue(42)
        const fn = jest.fn().mockRejectedValue(42)

        

        // console.log(await fn())
        // expect(fn()).resolves.toBe(42)
        expect(fn()).rejects.toBe(42)
    })

    test.skip('spy',() => {
        const fn = jest.spyOn(console,'log')

        console.log('hey')

        console.log(fn.mock)
        expect(fn).toHaveBeenCalledWith('hey')


    })

    test('timers1',() => {
        const fn = jest.fn()
        let counter = 0

        const recur = () => {
            setTimeout(() => {
                fn()
                console.log(1)

                if(counter < 300){
                    recur()
                    counter ++
                }
            }, 1000);
        }

        recur()
        recur()
        recur()
        // jest.runAllTimers()
        jest.runOnlyPendingTimers()
        console.log(jest.getTimerCount())
        expect(fn).toHaveBeenCalledTimes(3)
        expect(2+6 ===8).toBe(true)
    })
})