import React from 'react'
import css from './RenderUsersList.module.css'
import PropTypes from 'prop-types'

function RenderUsersList({contacts, deliteBtn}) {
  return (
    <ul>
            {contacts.map(({name,number, id }) => (
              <li className={css.list_item}
                key={id}>
                <p>{name}:</p>
                <p>{number}</p>
                    <button onClick={() => deliteBtn(id)}>Delete</button>

                </li>
            ))
            
            }
        </ul>
  )
}

RenderUsersList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
      ).isRequired,
  deliteBtn: PropTypes.func.isRequired,
};

export default RenderUsersList