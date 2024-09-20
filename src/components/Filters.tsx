import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "src/store/configureStore"
import { toggleOnlyActive, updateFilterParams } from "src/store/filterSlice"

interface Filters {
    onlyFiltered:boolean
    
}

const initialFilters:Filters = {
    onlyFiltered:false
}

export const Filters = () => {
    

    return (<div>
        <Switch/>
    </div>)
    
}

const Switch = () => {
    const dispatch = useDispatch()
    const onlyActive = useSelector((state:RootState) =>state.filters.onlyActive)

    return <div>
        <button data-testid='onlyActiveTasksBtn' className="onlyActiveTasksBtn" onClick={() => dispatch(toggleOnlyActive())}>{onlyActive ? 'Show all' : 'Show only active'}</button>
        {/* <button onClick={() => dispatch(updateFilterParams({key:"onlyActive",value:!onlyActive}))}>{onlyActive ? 'Show all' : 'Show only active'}</button> */}
        {/* <button onClick={() => dispatch(updateFilterParams({key:"genre",value:genre ==='male' ? 'female' : 'male'}))}>{genre === 'male' ? 'female' : 'male'}</button> */}
    </div>
}