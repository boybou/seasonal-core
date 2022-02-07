export function sortByDateAsc(dateA:Date,dateB:Date):number{
    return new Date(dateA).getTime() - new Date(dateB).getTime();
}

export function sortByDateDesc(dateA:Date,dateB:Date):number{
    return new Date(dateB).getTime() - new Date(dateA).getTime();
}