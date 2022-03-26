import './productlist.scss'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'
import Datatable from '../datatable/Datatable'

function ProductList() {

    
    return (
        <div className='product_list'>
            <Sidebar />
            <div className="product_list_Container">
                <Navbar />
                <Datatable title="products"/>
            </div>
        </div>
    )
} 

export default ProductList