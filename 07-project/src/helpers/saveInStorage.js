export const SaveInStorage = (key, element) => {

    //get localStorage items
    let elements = JSON.parse(localStorage.getItem(key));
    console.log(elements)

    //prove if there is an array
    if(Array.isArray(elements)){
        //we´re gonna add a new elements (movie)
        elements.push(element)
    }else{
        //if thi is not an array or isn´t an array, we´re gonna create it
        elements = [element]
    }

    //save in localStorae
    localStorage.setItem(key, JSON.stringify(elements));//we use JSON.stringfy cause we need to "translate" those movies, if we don´t translate it, the storage gonna show it like [objectt,object]

    //return object saved
    return element
}