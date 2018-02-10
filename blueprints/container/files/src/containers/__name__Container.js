import {connect} from 'react-redux'
import {} from 'redux/modules/<%= pascalEntityName %>'
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

const mapActionCreators = {}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapActionCreators)(<%= pascalEntityName %>)
