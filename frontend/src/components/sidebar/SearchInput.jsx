import React from 'react'
import './Sidebar.css'
import { CiSearch } from "react-icons/ci";
const SearchInput = () => {
  return (
    <form className="search-form">
      <input type="text" placeholder='Search..' className="search-input"/>
      <button type='submit' className="search-button">
      <CiSearch />
      </button>
    </form>
  )
}

export default SearchInput
