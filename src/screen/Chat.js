
import { connect } from 'react-redux'

function Chat(props) {

    return (
        <div>
            
            <h1>{props.userInfo.name}</h1>
        </div>
    );
}
const mapStateToProps = (state /*, ownProps*/) => {
    return {
        userInfo: state.auth.userInfo,
    }
}



export default connect(mapStateToProps, null)(Chat)