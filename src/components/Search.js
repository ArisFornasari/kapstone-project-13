import React from 'react'

function Search(props) {
  return (
    <section className="searchbox-wrap">
        <input type="text" 
        placeholder="Search our database..." 
        className="searchbox"
        onChange={props.handleInput} 
        onKeyPress={props.search}
        
      />
   </section>
  )
}

export default Search
