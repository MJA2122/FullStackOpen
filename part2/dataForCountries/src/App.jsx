import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Matches from './components/Matches'
import CountryInfo from './components/CountryInfo'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [matches, setMatches] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(res => {
      setCountries(res.data)
    })
  }, [])

  const searchHandler = (event) => {
    let newSearch = event.target.value

    setSearch(newSearch)

    let _matches = countries.filter(x => x.name.common.toLowerCase().includes(newSearch.toLowerCase()))
    let _country = null

    if (_matches.length > 10) {
      setMatches(_matches)
    } else if (_matches.length === 1) {
      setMatches(_matches)
      _country = _matches[0]
    } else if (_matches.length <= 10 & _matches.length >= 1) {
      setMatches(_matches)
    } else {
      setMatches([])
    }
    setCountry(_country)
  }

  return (
    <>
      <Filter search={search} searchHandler={searchHandler} />
      <Matches matches={matches} matchHandler={setCountry} />
      <CountryInfo country={country} />
    </>
  )
}

export default App
