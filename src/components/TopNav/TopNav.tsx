import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Suggestions from './Suggestions';

const TopNav: React.FC = () => {
    const [query, setQuery] = useState<string>("")

  return (
    <>
        <div className='w-full h-[10vh] flex items-center ml-40'>
            <SearchIcon />
            <input value={query} onChange={e => setQuery(e.target.value)} type="text" className='w-[50%] p-3 bg-transparent outline-none text-lg text-zinc-300' placeholder='Search Movies, TV Shows, Artists and others' />
            {query.length > 0 && <CloseIcon onClick={() => setQuery('')} />}
            
        </div>
        {query.length > 0 && <Suggestions />}
        
        
    </>
  )
}

export default TopNav