import React from 'react'
import { useGlobalContext } from '../Context'

const Search = () => {
  const { text, handleChange, setQuery } = useGlobalContext();

  const handleClick = () => {
    if(text) {
      setQuery(text);
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="input-group mb-3">
          <input type="text" value={text} onChange={handleChange} className="form-control rounded-1" placeholder="Enter City..." />
          <button className="btn btn-outline-secondary rounded-1" type="button" id="button-addon2" onClick={handleClick}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search