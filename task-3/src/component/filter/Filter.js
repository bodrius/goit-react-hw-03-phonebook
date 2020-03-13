import React from 'react'
const Filter = ({checkName}) => {
    return (
        <>
        <h3>Find contacts by name</h3>
        <input type="text" onChange={checkName}/>
        </>
    );
}

export default Filter;