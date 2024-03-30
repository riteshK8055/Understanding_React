const filterData = (searchInput, restaurants) =>{

    const filterData = restaurants.filter((restraunt) => 

    restraunt.info.name.toLowerCase().includes(searchInput)
);

return filterData;
}

export default filterData;