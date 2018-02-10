import connect from 'react-redux/es/connect/connect'
import { signInAttempt } from 'redux/Auth'
import Login from '../components/Login'

const mapActionCreators = { onSubmit: signInAttempt }

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapActionCreators)(Login)
