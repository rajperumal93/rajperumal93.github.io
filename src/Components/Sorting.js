const Sorting = (arr, sortName) => {
    const sorted =  arr.sort((a, b) => {
        return a[sortName] - (b[sortName])
    }); 
    return sorted;
}

export default Sorting;