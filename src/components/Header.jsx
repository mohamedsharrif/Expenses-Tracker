import React from 'react'

const Header = ({user}) => {
  return (
    <div className='header-container'>
      <form>
      <h2>Expense Tracker</h2>
      <h3>Wellcome Again {user}!</h3>
      <button>Logout</button>
      </form>
  
    </div>
  )
}

export default Header
