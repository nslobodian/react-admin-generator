import { connect } from 'react-redux'
import { getMemberAttempt } from '../modules/Member'
import Member from '../components/Member'

const mapActionCreators = {
  getMemberAttempt,
}

const mapStateToProps = ({ Member: { member, getMemberLoading } }) => ({
  member, getMemberLoading,
})

export default connect(mapStateToProps, mapActionCreators)(Member)
