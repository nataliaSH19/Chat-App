import React, { useState } from 'react'
import './Sidebar.css'
import { CiSearch } from "react-icons/ci";
import useConversation from '../../zustans/useConversation';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';


const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" placeholder='Search..' className="search-input" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' className="search-button">
        <CiSearch />
      </button>
    </form>
  )
}

export default SearchInput
