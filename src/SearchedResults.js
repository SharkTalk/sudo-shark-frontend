import React from 'react';

function SearchedResults({ searched, handleElementClick }) {
  console.log(searched);
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
            {obj.code.slice(0, 20)}
            ...
          </p>
          <p>
            <span>Translation: </span>
            {obj.translation.slice(0, 20)}
            ...
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchedResults;
