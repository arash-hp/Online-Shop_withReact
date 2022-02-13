import React from 'react';


export const Row = ({item}) => {
    return <tr>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td>{item.Company}</td>
        <td>{item.Category}</td>
        <td>{item.Color}</td>
        <td>{item.LastUpdate}</td>
        <td>{item.Fee}</td>
    </tr>

}
