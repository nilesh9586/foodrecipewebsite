import React from 'react';

import '../index.css';

const Header  = (props)=>{

    const {search,onInputChange,onSearchClick}=props;

    return(

        <>
         <div className="jumbotron  header">
         <h1 className="display-1 "><span className="material-icons">
fastfood
</span>
         
         Food Recipe </h1>

         <div className="input-group w-50 mx-auto">
  <input type="text" className="form-control"
   placeholder="Serach your Recipe..."
    value={search}
    onChange={onInputChange}
   />
  <div className="input-group-append">
   <button className="btn btn-dark ml-4" onClick={onSearchClick}>Serach</button>
  </div>
</div>
        
 
</div>

        </>
    );
}
export default Header;
