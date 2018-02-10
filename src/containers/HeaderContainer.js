import connect from 'react-redux/es/connect/connect'
import Header from 'components/Header'
import { logout } from 'redux/Auth'
import r from 'utils/roles'

const mapActionCreators = { logout }

const mapStateToProps = ({
  Auth: {
    loggedIn,
    admin: {
      username,
      roles,
    },
  },
}) => ({
  usersVisible: r.i(roles, r.USERS_READ),
  inspirationsVisible: r.i(roles, r.INSPIRATIONS_READ),
  inspirationsEditable: r.i(roles, r.INSPIRATIONS_EDIT),
  productsVisible: r.i(roles, r.PRODUCTS_READ),
  erpVisible: r.i(roles, r.ERP_READ),
  erpEditable: r.i(roles, r.ERP_EDIT),
  ordersVisible: r.i(roles, r.ORDERS_READ),
  loggedIn,
  username,
})

export default connect(mapStateToProps, mapActionCreators)(Header)
