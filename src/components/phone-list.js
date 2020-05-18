import React from 'react';

export const PhoneList = (props) => <table className="ui small table">
    <thead>
        <tr><th>Name</th><th>Number</th><th></th></tr>
    </thead>
    <tbody>
        <tr key="1">
            <td>Arsia ARNOLD</td>
            <td>+1-541-754-3010</td>
            <td className="center aligned">
                <button className="ui icon red button"><i className="trash icon"></i></button>
            </td>
        </tr>
        <tr key="2">
            <td>Kathy MILLER</td>
            <td>+1-541-754-3010</td>
            <td className="center aligned">
                <button className="ui icon red button"><i className="trash icon"></i></button>
            </td>
        </tr>
    </tbody>
</table>