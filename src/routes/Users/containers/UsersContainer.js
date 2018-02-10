import connect from 'react-redux/es/connect/connect'
import Users from '../components/UsersView'
import { getUsersPagination, goToUserDetails, handleChangeFilter, resetFilters, initChangeFilter } from 'redux/Users'

const mapActionCreators = { handleChangeFilter, getUsersPagination, goToUserDetails, resetFilters, initChangeFilter }

const mapStateToProps = ({
  Users: {
    users,
    getUsersLoading,
    pagination,
  },
}) => ({
  users,
  getUsersLoading,
  pagination,
})

export default connect(mapStateToProps, mapActionCreators)(Users)
