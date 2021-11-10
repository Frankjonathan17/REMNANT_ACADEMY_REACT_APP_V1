import React from 'react';

class Sort extends React.Component {
    render() { 

 const {onSortSelect,currentSort}=this.props

        return <React.Fragment>
         <div className='sortBy'>
                    <div className='sortTitle'>Sort By: </div>
                    <div className='flex soRtingBOX'>

                    <div 
                    onClick={()=>onSortSelect('asc','title','')}
                    className={currentSort==='asc'?'sort asc activeSort':'sort asc'}
                    >Ascending</div>
                    <div 
                    onClick={()=>onSortSelect('desc','title','')}
                    className={currentSort==='desc'?'sort desc activeSort':'sort desc'}>Decending</div>
                    <div
                     onClick={()=>onSortSelect('date','date' ,'desc')}
                   className={currentSort==='date'?'sort new activeSort':'sort new'}
                   >Newer</div>
                    <div 
                    onClick={()=>onSortSelect('dateReverse','date','acs')}
                    className={currentSort==='dateReverse'?'sort old activeSort':'sort old'}
                   >Older </div>

                    </div>
                    </div>
        </React.Fragment>;
    }
}
 
export default Sort;