import React from 'react';
import _ from 'lodash'



class PaginationHome extends React.Component {

    render() { 
        const {currentPage,itemsCount,onPageChange, pageSize} = this.props
        const pagesCount = Math.ceil(itemsCount /pageSize)
      //  if (pagesCount ===1) return null

        const pages =_.range(1,pagesCount+1)

        return <div className='pagination'>
            {pages.map((p,i)=>{
                return  <div 
           
                className={currentPage===p?'buttonPage activeMe':'buttonPage'}

                 onClick={()=>onPageChange(p)}>
                  {p}
                </div>
                  
            })}
        </div>;
    }
}
 
export default PaginationHome;