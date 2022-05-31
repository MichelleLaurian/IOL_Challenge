import React from 'react';
import ReactPaginate from "react-paginate";


const Pagination = ({ info, pageNumber, setPageNumber }) => {

  return (
    
      <ReactPaginate
        className='pagination__container'
        nextLabel='Siguiente'
        previousLabel='Anterior'
        nextClassName='btn pagination'
        previousClassName='btn pagination'
        pageClassName='btn button__b pagination'
        pageLinkClassName='btn button__b pagination'
      
        activeClassName='active '
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        onPageChange={(data) => {
          setPageNumber(data.selected + 1)
        }}
        pageCount={info?.pages}
      />

    
  )
}

export default Pagination; 