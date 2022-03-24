import { KeyboardArrowDownOutlined, MoreVertOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import './featured.scss'

function Featured() {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className='title'>Total Revenue</h1>
                <MoreVertOutlined fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                </div>

                <p className="title">Total sales made today</p>
                <p className="amount">$500</p>
                <p className="description">
                    Previus transactions processing , Last payments may not be included.
                </p>

                <div className="summary">
                    <div className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult neggative">
                            <KeyboardArrowDownOutlined fontSize='small' className='icon' />
                            <div className="resultAmount">$12.9k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult possitive">
                            <KeyboardArrowUpOutlined fontSize='small' className='icon' />
                            <div className="resultAmount">$20.3k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">Last Mouth</div>
                        <div className="itemResult possitive ">
                            <KeyboardArrowUpOutlined fontSize='small ' className='icon ' />
                            <div className="resultAmount">$120.9k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured