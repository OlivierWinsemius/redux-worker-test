import { connect } from 'react-redux';
import {
    addBlockFromParent,
} from '../../../redux/actions/blockchain';
import Blockchain from './Blockchain';

const mapStateToProps = state => ({
    blockchain: state.blockchain,
});

const mapDispatchToProps = dispatch => ({
    addBlockFromParent: parent =>
        dispatch(addBlockFromParent(parent)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Blockchain);
