import React, { useEffect, useState } from 'react';

const SearchedResults = (props) => {
  const { searched, handleElementClick } = props;
  console.log('line 5', searched);
  return (
    <div className='searchedContainer'>
      {searched.map((obj) => (
        <div
          onClick={() => handleElementClick(obj)}
          className='element'
          key={obj.translation}
        >
          <p>
            <span>Code: </span>
            {obj.code.slice(0, 100)}...
          </p>
          <p>
            <span>Translation: </span>
            {obj.code.slice(0, 100)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default SearchedResults;
