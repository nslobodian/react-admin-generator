import React from 'react'
import Link from 'react-router/lib/Link'
import cn from 'classnames'
import urls from 'utils/urls'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import { compose, withHandlers, withState } from 'recompose'
import BlueMen from 'static/images/Aiesec-white-blue.png'
const {
  members, home, projects,
} = urls

export const CustomLi = ({ active, onSelect, ...props }) => <li onClick={onSelect} {...props} />

const enhance = compose(
  withState('collapse', 'changeCollapsedStatus', false),
  withHandlers({
    toggleStatus: props => () => {
      props.changeCollapsedStatus(collapse => !collapse)
    },
  })
)
export const Header = enhance(({ loggedIn, logout, username, roles, toggleStatus, collapse, ordersVisible,
  usersVisible, inspirationsVisible, inspirationsEditable, productsVisible, erpVisible, erpEditable }) =>
  loggedIn ? <nav className='navbar navbar-inverse'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse'
          data-target='#bs-example-navbar-collapse-1' aria-expanded='false' onClick={toggleStatus}>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <Link to={home} className='navbar-brand'><img className='img-responsive' style={{ width: 150 }} src={BlueMen} alt='blueman' /></Link>
      </div>

      <div className={cn('collapse navbar-collapse', collapse && 'in')}>
        <ul className='nav navbar-nav'>
          <li>
            <Link to={members}>Members</Link>
          </li>
          <li>
            <Link to={projects}>Projects</Link>
          </li>
          {/* <NavDropdown title='Notifications' id='nav-dropdown-notif'>
            <CustomLi><Link to={notifications}>Published Notifications</Link></CustomLi>
            <CustomLi><Link to={createNotifications}>Create Notification</Link></CustomLi>
          </NavDropdown> */}
        </ul>
        <ul className='nav navbar-nav navbar-right'>
          <li>
            <a href='#'>{username}</a>
          </li>
          <li>
            <button onClick={logout} className='btn btn-default navbar-btn'>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    : null
)

export default Header
