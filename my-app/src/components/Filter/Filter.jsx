import React from 'react'
import PropTypes from 'prop-types'

function Filter({filter, onChange}) {
    return (
        <>
             <p>Find contacts by name</p>
      <label>
                <input onChange={onChange}
                    placeholder="Enter name..."
                    type="text"
                    name='filter'
                value={filter}/> 
      </label></>
 
  )
}

Filter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default Filter