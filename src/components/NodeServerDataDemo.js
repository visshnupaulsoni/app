import { connect } from 'react-redux';
import './Node.css';

const NodeServerDataDemo = (props) => {

    return (
        <div>
            <table>
                <th>
                    <td>Name</td>
                    <td>age</td>
                    <td>awards</td>
                </th>

            
            
                {props.playersData.map((item, key) => <tr><td> : {item.name}</td><td>: {item.age}</td><td>:{item.awards ?
                 item.awards.join(",") : ""}</td> </tr>)}
            </table><hr />
            <button onClick={props.getNodeAppData}>Click here to get data from node server

            </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        playersData: state.reducer5
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getNodeAppData: () => dispatch({ type: 'GET_APP_DATA' })
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NodeServerDataDemo);
