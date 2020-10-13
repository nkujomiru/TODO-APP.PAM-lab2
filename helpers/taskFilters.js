
export const EmptyFilter = () => (true)
export const FilterByDate = (task, selectedDate) => task.date.dateString == selectedDate.dateString
// export const FilterByDate = (task, selectedDate) => {
// console.log(task.date.dateString)
// console.log(selectedDate.dateString)
//     task.date.dateString == selectedDate.dateString
// }
export const FilterByName = (task, searchText) => (task.title.includes(searchText) || task.content.includes(searchText)) 
// export const FilterByDate = (task, selectedDate) => true
// export const FilterByName = (task, searchText) => (true) 



export const DateNameFilter = (task, selectedDate, searchText) => ( FilterByDate(task, selectedDate) && FilterByName(task, searchText)  )