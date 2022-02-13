import { Row } from './Row/Row.component';
import styles from './Information.module.scss';
import store from '../../../../../redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export const Information = () => {

  const data = useSelector((state) => state.slide.slides)

  return <div className={styles.root}>
    <div className={styles.information_box}>
      <table className="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Company</th>
            <th>Category</th>
            <th>Color</th>
            <th>Last Update</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <Row key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
  </div>;
}

