"use client"
import { useState } from 'react'
import React from 'react'
import { SearchManufacturer } from '.'

const SearchBar = () => {
    const handleSearch=()=>{}
    const [manufacturer, setManufacturer] = useState('')
  return (
    <form className='search-bar' onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
        manufacturer='ME' 
        />
      </div>
    </form>
  )
}

export default SearchBar
