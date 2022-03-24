import './sidebar.scss'

// Material Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

function SideBar() {

    const { dispatch } = useTheme()

    return (
        <div className='sidebar'>
            <div className='top' >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className='logo'>BookStore</span>
                </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span>Dashhboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li>
                        <Link to='/users' style={{ textDecoration: 'none' }}>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>Users</span>
                        </Link>

                    </li>
                    <li>
                        <Link to='/products' style={{ textDecoration: 'none' }} >
                            <ProductionQuantityLimitsOutlinedIcon className='icon' />
                            <span>Products</span>
                        </Link>

                    </li>
                    <li>
                        <BorderColorIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className='icon' />
                        <span>Notification</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className='icon' />
                        <span>System Healthy</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsOutlinedIcon className='icon' />
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <PermIdentityOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })} ></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default SideBar