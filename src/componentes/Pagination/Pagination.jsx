import React from 'react'
import './pagination.css'

const Pagination = ({postPerPage, totalPost, paginate}) => {
    const pageNumbers = [];
    
    for(let i=1; i <= Math.ceil(totalPost / postPerPage); i++ ){
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination-ul'>
            {pageNumbers.map(number =>
                <li key={number} className='pagination-li'>
                    <a className='a' onClick={(e)=> { e.preventDefault(); paginate(number); window.scrollTo(0, 0)}} href='/'>{number}</a>
                </li>)}
        </ul>
    </nav>
  )
}

export default Pagination