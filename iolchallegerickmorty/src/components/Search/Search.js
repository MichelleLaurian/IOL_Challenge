import React from 'react';


const Search = ({ setSearch, setPageNumber}) => {
  return (
    <div className=''>
      <form action="" className="form__searchbar">
        <input 
        onChange={(e)=>{
         
          setPageNumber(1)
          setSearch(e.target.value)
        }}
        type="text" 
        className='searchbar__input' placeholder='Busca a tu personaje ...' />
        <button className="searchbar__button" 
        onClick={e=>{
          e.preventDefault()
        }}>Buscar</button>
      </form>
    </div>
  )
}

export default Search; 