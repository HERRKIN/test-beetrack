import React from 'react'

const Pagination = ({page, list, onPaginate}) => (
  <div className='pagination'>
    {page > 1 ? (
      <a href='#' onClick={e => onPaginate(page - 1)}>
        <i className='fa fa-arrow-left' /> Anterior Página
      </a>) : ''}
    {list.length > 0 ? (
      <a href='#' className='next' onClick={e => onPaginate(page + 1)}>
        Siguiente Página <i className='fa fa-arrow-right' />
      </a>) : ''}
  </div>)
export default Pagination
