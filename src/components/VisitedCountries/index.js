import React from 'react'

const VisitedCountries = ({
  visitedCountries,
  onRemoveClick,
  onVisitAgainClick,
}) => (
  <div>
    <h1>Visited Countries</h1>
    <button>Remove</button>
    <ul>
      {visitedCountries.map(country => (
        <li key={country.id}>
          <img src={country.imageUrl} alt="thumbnail" />
          <p>{country.name}</p>
          <button onClick={() => onRemoveClick(country.id)}>Remove</button>
        </li>
      ))}
    </ul>
    {visitedCountries.length === 0 && <p>No Countries Visited Yet</p>}
  </div>
)

export default VisitedCountries
