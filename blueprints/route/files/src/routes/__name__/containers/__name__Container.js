import { connect } from 'react-redux'
import { get<%= pascalEntityName %>Attempt } from '../modules/<%= pascalEntityName %>'
import <%= pascalEntityName %> from '../components/<%= pascalEntityName %>'

const mapActionCreators = {
  get<%= pascalEntityName %>Attempt,
}

const mapStateToProps = ({ <%= pascalEntityName %>: { <%= pascalEntityName %>, get<%= pascalEntityName %>Loading } }) => ({
  <%= pascalEntityName %>, get<%= pascalEntityName %>Loading
})

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>)
