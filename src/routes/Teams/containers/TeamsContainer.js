import { connect } from 'react-redux'
import {
  getTeamsAttempt,
  changeTeamsFilter,
  changeTeamsPagination,
  resetFilters,
  deleteTeamsAttempt
} from '../modules/Teams'
import Teams from '../components/Teams'

const mapActionCreators = {
  getTeamsAttempt,
  changeTeamsFilter,
  changeTeamsPagination,
  resetFilters,
  deleteTeamsAttempt
}

const mapStateToProps = ({ Teams: { teams, searchValues, pagination, getTeamsLoading } }) => ({
  teams, searchValues, pagination, getTeamsLoading
})

export default connect(mapStateToProps, mapActionCreators)(Teams)
