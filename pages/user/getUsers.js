import axios from 'axios';
import { useEffect,useState } from 'react';
import style from '../common/style/table.module.css'
import Link from 'next/link'

const Table = ({ columns, colspan, data}) => {
    return (
      <table className={style.table}>
        <thead>
            <tr   >
            {columns.map((column, index) => (
                  <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                { data.length == 0  ?<tr >
                                      <td colSpan={colspan} >데이터가 없습니다</td>
                                      </tr>
                :data.map((user) => (
                <tr key={user.username} >
                  <td >
                    <Link href={{pathname:`/user/[username]`,
                                query:{selectedUser: 'test'}}} as={`/user/${user.username}`}>
                      <a>{user.userid}</a>
                    </Link>
                  </td>
                  <td>{user.password}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
    );
  }
  
export default function UserList(){
    const columns = ["Userid", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])

    const proxy = 'http://localhost:5000'

    useEffect(() => {
      axios.get(proxy + '/api/user/list').then(res => {
        setData(res.data.users)
      }).catch(err => {})
    }, [])  

    return(<>
        <h1>사용자 목록</h1>  
        <div >
        <Table columns={columns} colspan={columns.length} data={data}/>
        </div>
        </>)
}