import React , {useState,useEffect}from 'react'

const countryUrl = "https://restcountries.com/v2/continent/asia"

const Countries = () => {

    const [country, setCountry] = useState([])
    const [filterData, setFilterData] = useState("")

    const fetchcountryData = async()=>{
        const listOfCountry = await fetch(countryUrl)
        const country = await listOfCountry.json()
        setCountry(country)
         console.log(country)
    }
    useEffect (()=>{
        fetchcountryData()
    },[])
    return(
        <>
        <div className="search-box">
            <input type="text" placeholder="Search.." onChange={(event)=>{setFilterData(event.target.value)}}></input>
        </div> 
        <div className="country-wrapper">
            {country.filter((countryList)=> {
                if (filterData == ""){
                    return countryList
                } else if (countryList.name.toLowerCase().includes(filterData.toLowerCase())) {
                    return countryList

                }
            }).map ( (countryList)=> {
                const {area, name, region, capital, flags} = countryList
                return(
                    <>
                        
                        <div className="container" key={area}>
                            <div className="falg"><img src={flags[1]}></img></div> 
                            <div className="details">
                                <h3>{name}</h3>
                                <h5>Capital: {capital}</h5>
                                <h5>Region: {region}</h5>
                            </div>
                        </div>

                    </>
                )
            })}
        </div> 
        </>
    )
}
export default Countries
