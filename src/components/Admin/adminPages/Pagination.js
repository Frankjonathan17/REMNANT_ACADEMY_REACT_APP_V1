import React from 'react';
import './pagination.css'
import _ from 'lodash'



class Pagination extends React.Component {

    render() { 
        const {currentPage,itemsCount,onPageChange, pageSize} = this.props
        const pagesCount = Math.ceil(itemsCount /pageSize)
      //  if (pagesCount ===1) return null

        const pages =_.range(1,pagesCount+1)

        return <div className='pagination'>
            {pages.map((p,i)=>{
                return <button
                className={currentPage===p?'activePage':''}
                onClick={()=> onPageChange(p)}
                key={i}>
              {p}
            </button>
            })}
        </div>;
    }
}
 
export default Pagination;