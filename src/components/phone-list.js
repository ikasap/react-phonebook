import React from 'react';
import axios from 'axios';

class PhoneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios
            .get("http://localhost:3001/phones")
            .then(res => this.setState({ data: res.data }))
            .catch(e => console.log(e));
    }
    render() {
        return (
            <table className="ui small table">
                <thead>
                    <tr><th>Name</th><th>Number</th><th></th></tr>
                </thead>
                <tbody>
                    {this.state.data.map((item) =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.number}</td>
                            <td className="center aligned">
                                <button className="ui icon red button"><i className="trash icon"></i></button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}

export default PhoneList;