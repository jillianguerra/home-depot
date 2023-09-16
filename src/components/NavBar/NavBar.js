import styles from './NavBar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DepListNavBar from '../DepListNavBar/DepListNavBar';
import Hamburger from '../Hamburger/Hamburger';
import HamMenu from '../HamMenu/HamMenu';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({ departments, user, setUser, onSearch }) {
	const [drop, setDrop] = useState(false);
	const [isHoveredLogo, setIsHoveredLogo] = useState(false);
  const [isHoveredCart, setIsHoveredCart] = useState(false);

	const handleHover = () => {
		setDrop(!drop);
	};

	return (
		<>
			<div className={styles.navBar}>
				<div className={styles.navBarTop}>
					<div
						onMouseEnter={() => setIsHoveredLogo(true)}
						onMouseLeave={() => setIsHoveredLogo(false)}
					>
						<Link to="/home" className={styles.logo}>
							<img
								src={
									isHoveredLogo
										? 'https://i.imgur.com/1pSeuQr.png'
										: 'https://i.imgur.com/20PTdRW.png'
								}
								alt="logo"
							/>
						</Link>
					</div>
					<SearchBar onSearch={onSearch} />
					<div
						onMouseEnter={() => setIsHoveredCart(true)}
						onMouseLeave={() => setIsHoveredCart(false)}
					>
						<Link to="/cart" className={styles.logo}>
							<img
								src={
									isHoveredCart
										? 'https://i.imgur.com/ZgV76Jx.png'
										: 'https://i.imgur.com/H7PI4xJ.png'
								}
								alt="cart"
							/>
						</Link>
					</div>
					<div
						className={styles.hamContainer}
						onMouseEnter={handleHover}
						onMouseLeave={handleHover}
					>
						<div className={styles.hamburger}>
							<Hamburger />
						</div>
						{drop && <HamMenu user={user} setUser={setUser} />}
					</div>
				</div>
				<div className={styles.navBarBottom}>
					{/* <>&lt;</> */}
					<DepListNavBar departments={departments} />
					{/* <>&gt;</> */}
				</div>
			</div>
		</>
	);
}
