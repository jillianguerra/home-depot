import "../../scss/styles.scss";
import styles from '../HomePage/HomePage.module.scss';
import FeaturedItemCarousel from '../../components/FeaturedItemCarousel/FeaturedItemCarousel';
import DepartmentList from '../../components/DepartmentList/DepartmentList';

export default function HomePage({ departments }) {

	const imageUrls = [
		"https://i.imgur.com/g6VqT8r.jpg",
		"https://i.imgur.com/TTU1odM.jpg",
		"https://i.imgur.com/9MpuQ2X.jpg",
		"https://i.imgur.com/WR2b1NJ.jpg",
		"https://i.imgur.com/4furMoT.png",
		"https://i.imgur.com/cSFKjc1.jpg"
	  ];
	

	return (
		<div className={styles.HomePage}>
			<div className={styles.Carousel}>
				<FeaturedItemCarousel imageUrls={imageUrls} />
			</div>
			<div>
				<DepartmentList departments={departments}/>
			</div>
		</div>
	);
}
