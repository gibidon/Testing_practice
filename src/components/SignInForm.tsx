import { ChangeEvent, useState,useRef, FormEvent, FormEventHandler } from "react"

const initialInputState = {
    name:'',
    surname:'',
    age:0
}

export const SignInForm = () => {
    const [inputs,setInputs] = useState(initialInputState)
    const formRef = useRef<HTMLFormElement>(null)
    const inputNameRef = useRef<HTMLInputElement>(null)
    const handleChange:FormEventHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setInputs((prevState) => ({...prevState,[e.target.name]:e.target.value
        }))
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('inputs submitted: ',inputs )
        
        formRef.current?.reset()
    }

    const handleReset = () => {
        setInputs(initialInputState)
    }

    const handleBegin = () => {
        inputNameRef.current?.focus()
    }
    return (
        <>
        <p><button onClick={handleBegin}>Fill out the form</button></p>
         <form 
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <input  type='text' name='name' ref={inputNameRef}/>
            <input  type='text' name='surname'/>
            <input  type='number' name='age'/>
            <p>
                <button type='submit'>Submit</button>
                <button type='reset'>Reset</button>
            </p>
        </form>
        </>
       
    )
}