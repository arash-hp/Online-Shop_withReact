import React, { Component } from 'react';
import styles from './Popup.module.scss';

export const Popup=(props)=> {
  
    console.log(props);
  

        return (
            <>
                <div className={styles.wrapper} />
                <div className={styles.root}>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            تصویر کالا:
                            <input type='text' name='title' placeholder='Add title for card' value={this.state.title} onChange={this.handleChangeInput} />
                        </label>
                        <label>
                            Date:
                            <input type='date' name='endDate' placeholder='Add a date for task' value={this.state.endDate}
                                onChange={this.handleChangeInput} />
                        </label>
                        <label>
                            Status:
                            <select name="status" value={this.state.status} onChange={this.handleChangeInput}>
                                <option>Please Choose</option>
                                <option >Todo</option>
                                <option >In progress</option>
                                <option >Completed</option>
                            </select>
                        </label>
                        <label>
                            Description:
                            <textarea name='description' placeholder='Add  more detailed description....' value={this.state.description} onChange={this.handleChangeInput} />
                        </label>
                        <button type='submit'>click</button>
                    </form>
                </div>
            </>
        )
    }
