import { ShoeCard } from "../cards/ShoeCard"
import { ShoesList } from "../../constants"
import { useState } from "react"


const Body = () => {

    const [searchText, setSearchText] = useState("") 

    const [completeShoeLists, setCompleteShoeLists] = useState(ShoesList)

    const [shoeLists, setShoeLists] = useState(ShoesList)

    const [filterList, setFilterList] = useState(ShoesList)

    const [isSneakerFilterActive, setIsSneakerFilterActive] = useState(false)

    const handleSearch = (e) => {
        const newText = e.target.value
        setSearchText(newText)

        const filteredData = (isSneakerFilterActive ? filterList : completeShoeLists)
            .filter((shoes) => shoes.title.toLowerCase().includes(newText.toLowerCase()))

        setShoeLists(filteredData)
    }

    const filterSneakers = () => {
        const filterData = completeShoeLists.filter((sneaker) => sneaker.category.toLowerCase().includes("sneakers"))
        setFilterList(filterData)
        setIsSneakerFilterActive(true)
        handleSearch({ target: { value: searchText } })
    }

    const resetFilters = () => {
        setIsSneakerFilterActive(false);
        setShoeLists(completeShoeLists);
        setFilterList(ShoesList)
    };


    return (
        <>
            <input type="text" placeholder="Search" value={searchText} className="search" onChange={handleSearch} />

            <button onClick={filterSneakers}>Sneakers</button>

            <button onClick={resetFilters}>Reset Filters</button>

            <div className="shoecard">
                {
                    shoeLists.map((shoe) => {
                        return <ShoeCard {...shoe} key={shoe.id} />
                    })
                }

            </div>

        </>

    )

}


export default Body