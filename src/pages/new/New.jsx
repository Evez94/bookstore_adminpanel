import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './new.scss'
import { DriveFolderUploadOutlined } from '@mui/icons-material'
import { useState } from 'react'

function New({ inputs, title }) {

    const [file, setFile] = useState('')


    return (
        <div className='new'>
            <Sidebar />

            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img
                            src={
                                file
                                    ? URL.createObjectURL(file)
                                    : "https://media.istockphoto.com/vectors/no-photo-available-vector-icon-default-image-symbol-picture-coming-vector-id1354776450?k=20&m=1354776450&s=612x612&w=0&h=hnTHv1X0Fu4viDTpJmBoJipQwoslNJbzVuF8IqI9vgY="
                            }
                            alt=""

                        />
                    </div>
                    <div className="right">
                        <form >
                            <div className="formInput">
                                <label htmlFor='file'><DriveFolderUploadOutlined className='icon' /></label>
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} id="file" style={{ display: "none" }} />
                            </div>

                            {inputs.map((input) => {
                                if (input.type !== "select") {
                                    return (<div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input type={input.type} placeholder={input.placeholder} />
                                    </div>)
                                }
                            })}

                            <div className="formInput" >
                                <label htmlFor='lang'>Language</label>
                                <select name="lang" id="lang" placeholder='Choose Language...'>
                                    {
                                        inputs.map((input) => {
                                            if (input.name === "language") {
                                                return (
                                                    input.value.map(lang => {
                                                        return (<option key={input.id} value={lang}  >
                                                            {lang}
                                                        </option>)
                                                    })
                                                )
                                            }
                                        })
                                    }
                                </select>
                            </div>



                            <div className="formInput">
                                <button>Add </button>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default New