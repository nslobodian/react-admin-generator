import { connect } from 'react-redux'
import {
  get<%= pascalEntityName %>Attempt,
  change<%= pascalEntityName %>Filter,
  change<%= pascalEntityName %>Pagination,
  resetFilters,
  delete<%= pascalEntityName %>Attempt
} from '../modules/<%= pascalEntityName %>'
import <%= pascalEntityName %> from '../components/<%= pascalEntityName %>'

const mapActionCreators = {
  get<%= pascalEntityName %>Attempt,
  change<%= pascalEntityName %>Filter,
  change<%= pascalEntityName %>Pagination,
  resetFilters,
  delete<%= pascalEntityName %>Attempt
}

const mapStateToProps = ({ <%= pascalEntityName %>: { <%= pascalEntityName.toLowerCase() %>, searchValues, pagination, get<%= pascalEntityName %>Loading } }) => ({
  <%= pascalEntityName.toLowerCase() %>, searchValues, pagination, get<%= pascalEntityName %>Loading
})

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>)
