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
                <li className={styles.li}><Link href='/board/board-list'>Board List</Link></li>
                <li className={styles.li}><Link href='/board/board-form'>Board Form</Link></li>
                <li className={styles.li}><Link href='/admin/dashboard'>DashBoard</Link></li>
                <li className={styles.li}> <Link href='/game/game-list'>GameList</Link> </li>
                <li className={styles.li}> <Link href='/game/team-list'>TeamList</Link> </li>
                <li className={styles.li}> <Link href='/todo/todo-list'>TodoList</Link> </li>
                <li className={styles.li}><Link href='/user/sign-in'>SignIn</Link></li>
                <li className={styles.li}><Link href='/user/sign-up'>SignUp</Link></li>
                <li className={styles.li}><Link href='/user/user-list'>SignList</Link></li>
            </ul>
        </nav>
    );
}