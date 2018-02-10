import { connect } from 'react-redux'
import {
  getProjectsAttempt,
  changeProjectsFilter,
  changeProjectsPagination,
  resetFilters,
  deleteProjectsAttempt,
} from '../modules/Projects'
import Projects from '../components/Projects'

const mapActionCreators = {
  getProjectsAttempt,
  changeProjectsFilter,
  changeProjectsPagination,
  resetFilters,
  deleteProjectsAttempt,
}

const mapStateToProps = ({ Projects: { projects, searchValues, pagination, getProjectsLoading } }) => ({
  projects, searchValues, pagination, getProjectsLoading,
})

export default connect(mapStateToProps, mapActionCreators)(Projects)
