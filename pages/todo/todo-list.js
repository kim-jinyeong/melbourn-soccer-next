import axios from 'axios';
import { useEffect,useState } from 'react';
import style from '../common/style/table.module.css'


const Table = ({data}) => {
    return(
    <table>
        <th>
            <tr>
                <th>일정</th>
            </tr>
        </th>
        <tbody>
            {data.length == 0 ?
            <tr>
                <td>일정이 없습니다.</td>
            </tr>
            : <tr>
                <td>일정이 있습니다.</td>
            </tr>
            }
        </tbody>
    </table>
    );
}
  
export default function TodoList(){
    const columns = ["Newtodo"];
    const [data, setData] = useState([])

    const proxy = 'http://localhost:5000'

    useEffect(() => {
      axios.get(proxy + '/api/todo/list').then(res => {
        setData(res.data.todos)
      }).catch(err => {})
    }, [])  

    return(<>
        <h1>스케줄 목록</h1>  
        <div className={style.td}>
        <Table data={data}/>
        </div>  
        </>)
}