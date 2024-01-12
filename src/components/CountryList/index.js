import React from 'react'

const CountryList = ({countriesList, onVisitClick}) => (
  <div>
    <h1>Countries</h1>
    <ul>
      {countriesList.map(country => (
        <li key={country.id}>
          <img src={country.imageUrl} alt="thumbnail" />
          <p>{country.name}</p>
          {!country.isVisited && (
            <button onClick={() => onVisitClick(country.id)}>Visit</button>
          )}
        </li>
      ))}
    </ul>
  </div>
)

export default CountryList
