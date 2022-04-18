import Link from "next/link";
import styles from "common/style/Nav.module.css";


export default function Nav(){
    
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.li}><Link href='/'>Home</Link></li>
                <li className={styles.li}><Link href='/basic/calc'>Calc</Link></li>
                <li className={styles.li}><Link href='/basic/counter'>Count</Link></li>
                <li className={styles.li}><Link href='/basic/bmi'>Bmi</Link></li>
                <li className={styles.li}><Link href='/board/getArticle'>게시글목록</Link></li>
                <li className={styles.li}><Link href='/board/addArticles'>게시글등록</Link></li>
                <li className={styles.li}><Link href='/board/modifyArticles'>게시글수정</Link></li>
                <li className={styles.li}><Link href='/board/removeArticles'>게시글삭제</Link></li>
                <li className={styles.li}> <Link href='/game/getGame'>게임목록</Link> </li>
                <li className={styles.li}> <Link href='/game/addGame'>게임등록</Link> </li>
                <li className={styles.li}> <Link href='/game/modifyGame'>게임수정</Link> </li>
                <li className={styles.li}> <Link href='/game/removeGame'>게임삭제</Link> </li>
                <li className={styles.li}> <Link href='/todo/addTodo'>스케줄등록</Link> </li>
                <li className={styles.li}> <Link href='/todo/getTodo'>스케줄목록</Link> </li>
                <li className={styles.li}> <Link href='/todo/modifyTodo'>스케줄수정</Link> </li>
                <li className={styles.li}> <Link href='/todo/removeTodo'>스케줄삭제</Link> </li>
                <li className={styles.li}><Link href='/user/join'>회원가입</Link></li>
                <li className={styles.li}><Link href='/user/login'>로그인</Link></li>
                <li className={styles.li}><Link href='/user/getUsers'>사용자리스트</Link></li>
                <li className={styles.li}><Link href='/user/updateUser'>사용자수정</Link></li>
                <li className={styles.li}><Link href='/user/withdrawUser'>회원탈퇴</Link></li>
            </ul>
        </nav>
    );
}