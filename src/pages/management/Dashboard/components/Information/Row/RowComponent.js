import React from 'react';
import styles from './Row.module.scss'


export const Row = ({item}) => {
    return <tr className={styles.root}>
        <td>{item.id}</td>
        <td><img src={'http://localhost:3003/files/234bfb4188cc0675fa26864c9b27e786'} /></td>
        <td>{item.name}</td>
        <td>{item.brand}</td>
        <td><button>حذف</button><button>ویرایش</button></td>
    </tr>

}
