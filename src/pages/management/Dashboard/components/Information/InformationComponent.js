import { Row } from './Row/RowComponent';
import styles from './Information.module.scss';
import store from '../../../../../redux/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderProduct } from './Header/ModalComponent';


export const Information = () => {

  const data = useSelector((state) => state.slide.slides)

  

  // const [isOpen, setIsOpen] = useState(false);

  return <div className={styles.root}>
    <div className={styles.title}>
      {/* <h2>مدیریت کالاها</h2> */}
      {/* <button onClick={() => setIsOpen(true)}>ذخیزه</button> */}
      <HeaderProduct />
    </div>
    <div className={styles.information_box}>
      <table className="uk-table uk-table-striped">
        <thead>
          <tr>
            <th>ردیف</th>
            <th>تصویر </th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th>تغییرات</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => <Row key={item.id} item={item} />)}
        </tbody>
      </table>
    </div>
    {/* {isOpen && <Popup setIsOpen={setIsOpen} />} */}
  </div>;
}

