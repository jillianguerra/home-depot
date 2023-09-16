import styles from './AboutEachOfUs.module.scss';
import { useState } from 'react';

export default function AboutEachOfUs({
	name,
	originalUrl,
	hoverUrl,
	portfolio
}) {
	const [isHovered, setIsHovered] = useState(false);

	async function redirectToPortfolio() {
		window.open(portfolio, '_blank')
	}

	return (
		<div
			className={styles.PhotoContainer}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
            onClick={() => redirectToPortfolio()}
		>
			<div className={styles.Photo}>
				<img
					src={isHovered ? hoverUrl : originalUrl}
					alt={name}
				/>
				<h5>{name}</h5>
			</div>
		</div>
	);
}

{
	/* 
{
		photoSets.map((photoSet, i) => (
			<div className={styles.PhotoSet} key={i}>
				{photoSet.map((photo, j) => (
					<div className={styles.Photo} key={j}>
						<img src={photo.originalUrl} alt={`${photo.name}`} />
						<div
							className={styles.HoverPhoto}
							style={{ backgroundPhoto: `url(${photo.hoverUrl})` }}
						></div>
					</div>
				))}
			</div>
		))
	}

<div className={styles.Photo}>

<img src="https://i.imgur.com/6EMU15x.jpg" alt="San" />

<div className={styles.HoverPhoto}></div>
</div> */
}
