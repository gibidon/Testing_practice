import { useSelector } from "react-redux"
import { RootState } from "src/store/configureStore"

export const useFilters = (tasks:Task[]) => {
    const filters = useSelector((state:RootState) => state.filters)
    let filteredTasks:Task[] = tasks || []
    
    if(filters.onlyActive){
        filteredTasks = tasks.filter(task => task.done === false)
    }

    return filteredTasks
}