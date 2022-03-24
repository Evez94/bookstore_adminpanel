import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

import './single.scss'

function Single() {
    return (
        <div className='single'>
            <SideBar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt=""
                                className='itemImg'
                            />

                            <div className="details">
                                <h1 className="itemTitle">Evez Aslanov</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">evez.aslanov.94@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+994775203316</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Absheron Eliaga Vahid kuc. 187</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Azerbaijan</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="User Spending (Last 6 Months) " />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single