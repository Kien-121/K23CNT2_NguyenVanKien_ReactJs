import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function NvkReadApiLocal() {
    // khởi taọ state
    const [nvkListUser, setNvkListUser] = useState([])
    const apiUrl = "http://localhost:3001/users"
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((nvkResponse)=>{
                setNvkListUser(nvkResponse.data)
            })
            .catch((error)=>{
                console.log("Loi");
            })
    },[])

    return (
    <div>
        <h2> Doc du lieu tu Api Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    nvkListUser.map((nvkItem, index)=>{
                        return (
                            <tr>
                                <td>{nvkItem.fullname}</td>
                                <td>{nvkItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
}