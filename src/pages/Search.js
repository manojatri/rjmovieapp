import React from 'react'
import { useGlobalContext } from './context'

const Search = () => {
  const {isError, query, setQuery} = useGlobalContext();
  return (
    <div className='searchContainer'>
      <h3>Enter Movie Name</h3>
      <form action="#" onSubmit={(e) => {e.preventDefault()}}>
        <div className='searchBox'>
          <input type="textbox" placeholder='Search Movie Here...' className='searchInput' value={query} onChange={(e) =>{setQuery(e.target.value)}} ></input>
        </div>
      </form>

      <div className='showMsg'>
        {isError.show && isError.msg }
      </div>
    </div>
  )
}

export default Search