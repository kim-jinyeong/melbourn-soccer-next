import axios from 'axios';
import { useEffect,useState } from 'react';
import style from '../common/style/table.module.css'


const Table = ({columns, colspan, data}) => {
    return(
    <table className={style.table}>
        <thead>
            <tr className={style.tr}>
                {columns.map((column, index) =>(
                    <th className={style.td} key={index}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.length == 0 ? <tr className={style.tr}>
                                    <td colSpan={colspan} className={style.td}>데이터가 없습니다.</td>
                                </tr>
            :data.map((todo) => (
                <tr key={todo.userid}>
                    <td>{todo.userid}</td>
                    <td>{todo.task}</td>
                    <td><input type="checkbox"></input></td>
                </tr>
            ))}
        </tbody>
    </table>
    );
}
  
export default function TodoList(){
    const columns = ["UserId", "Task","Complete"];
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
        <Table columns={columns} colspan={columns.length}data={data}/>
        </div>  
        </>)
}