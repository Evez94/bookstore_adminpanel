import React from 'react'
import './navbar.scss'

// Material icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import {
    ChatBubbleOutlineOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LineStyleOutlined,
    NotificationsNoneOutlined
} from '@mui/icons-material';

import { useTheme } from '../../hooks/useTheme';

const Navbar = () => {

    const { dispatch } = useTheme()

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type='text' placeholder='Search...' />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className='icon' onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className='icon' />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className='icon' />
                        <div className="counter">3</div>
                    </div>
                    <div className="item">
                        <LineStyleOutlined className='icon' />
                    </div>
                    <div className="item">
                        <img
                            src='https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1420692388.1641168000'
                            className='avatar'
                            alt=''
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar