const CountryInfo = ({country}) => {
    if (!country) return null

    let languages = []
    for (let key in country.languages) {
        languages.push(country.languages[key])
    }

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital.join(', ')}</p>
            <h2>Languages</h2>
            <ul>
                {languages.map(lang =>
                    <li key={lang}>{lang}</li>
                )}
            </ul>
            <img src={country.flags.png} />
        </>
    )
}

export default CountryInfo