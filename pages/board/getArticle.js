import axios from 'axios'
import style from '../common/style/table.module.css'
import { useEffect, useState } from 'react';

const Table = ({ columns, colspan, data}) => {
    return (
      <table className={style.table}>
        <thead>
          <tr className={style.tr}>
            {columns.map((column) => (
                <th key={column.passengerId} className={style.td}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
                { data.length == 0  ?<td colSpan={colspan} className={style.td}>데이터가 없습니다</td>
                :data.map((board) => (
                  <tr className={style.tr} key={board.passengerId}>
                  <td className={style.td}>{board.passengerId}</td>
                  <td className={style.td}>{board.name}</td>
                  <td className={style.td}>{board.teamId}</td>
                  <td className={style.td}>{board.subject}</td>
                  </tr>
                ))}
        </tbody>
      </table>
    );
  }

export default function BoardList(){
    const columns = ["PassengerId", "Name", "TeamID", "Subject"]
    const proxy = 'http://localhost:5000'
    const [data, setData] = useState([])

    useEffect( () => {
        axios.get(proxy + '/api/board/list').then(res => {
            setData(res.data.boards)
        }).catch(err => {})
    })
    return(<>
        <h1>게시판 목록 </h1>        
        <div className={style.td}>
        <Table columns={columns} colspan={columns.length} data={data}/>
        </div>

        </>
    )
}