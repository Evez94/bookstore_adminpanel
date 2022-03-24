import './userlist.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Datatable from '../datatable/Datatable'

function UserList() {
    return (
        <div className='user_list'>
            <Sidebar /> 
            <div className="user_list_Container">
                <Navbar />
                <Datatable title="users" />
            </div>
        </div>
    )
}

export default UserList