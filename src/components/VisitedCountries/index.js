// import React from 'react'

// const VisitedCountries = ({
//   visitedCountries,
//   onRemoveClick,
//   onVisitAgainClick,
// }) => (
//   <div>
//     <h1>Visited Countries</h1>
//     <button>Remove</button>
//     <ul>
//       {visitedCountries.map(country => (
//         <li key={country.id}>
//           <img src={country.imageUrl} alt="thumbnail" />
//           <p>{country.name}</p>
//           <button onClick={() => onRemoveClick(country.id)}>Remove</button>
//         </li>
//       ))}
//     </ul>
//     {visitedCountries.length === 0 && <p>No Countries Visited Yet</p>}
//   </div>
// )

// export default VisitedCountries

import React from 'react'

const VisitedCountries = ({visitedCountries, onRemoveClick}) => (
  <div>
    <h1>Visited Countries</h1>
    <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'center'}}>
      {visitedCountries.map(country => (
        <li key={country.id} style={{margin: '10px', textAlign: 'center'}}>
          <img
            src={country.imageUrl}
            alt="thumbnail"
            style={{width: '100px', height: '100px', objectFit: 'cover'}}
          />
          <p style={{position: 'absolute', bottom: '5px', left: '5px'}}>
            {country.name}
          </p>
          <button
            style={{position: 'absolute', bottom: '5px', right: '5px'}}
            onClick={() => onRemoveClick(country.id)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
    {visitedCountries.length === 0 && <p>No Countries Visited Yet</p>}
  </div>
)

export default VisitedCountries
