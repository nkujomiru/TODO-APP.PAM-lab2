
export const EmptyFilter = () => (true)
export const FilterByDate = (task, selectedDate) => 
    task.date.dateString == selectedDate.dateString
export const FilterByName = (task, searchText) => 
    (task.title.includes(searchText) || task.content.includes(searchText)) 

export const DateNameFilter = (task, selectedDate, searchText) => 
    ( FilterByDate(task, selectedDate) && FilterByName(task, searchText)  )