import styles from './Header.module.css';

import logo from '../../imgs/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header_container}>
        <nav>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <li><Link to="/tree">tree</Link></li>
                <li><Link to="/people">people</Link></li>
            </ul>
        </nav>
    </header>
  )
}
