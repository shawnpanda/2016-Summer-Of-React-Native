import { connect } from ' react-redux'
import Home from '../components/Home'

const mapStateToProps = ( state ) => {
  return { notes: state.notes }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer