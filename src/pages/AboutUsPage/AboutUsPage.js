import '../../scss/styles.scss';
import styles from './AboutUsPage.module.scss';
import AboutEachOfUs from '../../components/AboutEachOfUs/AboutEachOfUs'

export default function AboutUsPage() {
	const photoSets = [
		{
			name: "San Lae Lae Cho",
			originalUrl: "https://i.imgur.com/r1t2mI5.jpg",
			hoverUrl: "https://i.imgur.com/7NHSThc.jpg",
			portfolio: "https://github.com/sanlaelaecho",
		},
		{
			name: "Jillian Guerra",
			originalUrl: "https://i.imgur.com/6GZ5z4d.jpg",
			hoverUrl: "https://ca.slack-edge.com/T0351JZQ0-U04SKNZNKAR-309bde1b5a61-512",
			portfolio: "https://github.com/jillianguerra",
		},
		{
			name: "Laura Cohen",
			originalUrl: "https://ca.slack-edge.com/T0351JZQ0-U04TY0HGJBU-3355816fa9c2-512",
			hoverUrl: "https://i.imgur.com/sMt9ChG.jpg",
			portfolio: "https://github.com/lcohen730",
		},
		{
			name: "Joey Zazzi",
			originalUrl: "https://i.imgur.com/sUxaaIB.jpg",
			hoverUrl: "https://i.imgur.com/kkmwGdD.jpg",
			portfolio: "https://github.com/JoeyZ56",
		},
		{
			name: "Elysea Crawford",
			originalUrl: "https://ca.slack-edge.com/T0351JZQ0-U04SSJX9F7F-3866d5f5ae45-512",
			hoverUrl: "https://i.imgur.com/Gn8Pd7K.jpg",
			portfolio: "https://github.com/MissElysea",
		},
		{
			name: "Mimi Zhou",
			originalUrl: "https://ca.slack-edge.com/T0351JZQ0-U04K1HHJAL8-9469e1d822f5-512",
			hoverUrl: "https://i.imgur.com/kkmwGdD.jpg",
			portfolio: "https://github.com/mimo217",
		},
		{
			name: "Mel Blanco",
			originalUrl: "https://i.imgur.com/CYxPl0m.jpg",
			hoverUrl: "https://ca.slack-edge.com/T0351JZQ0-U04SJCA7EP9-0b8ba3be8c8f-512",
			portfolio: "https://github.com/lovewitchwifi",
		},
		{
			name: "Peter Jacobs",
			originalUrl: "https://i.imgur.com/mU4j6L6.jpg",
			hoverUrl: "https://i.imgur.com/kkmwGdD.jpg",
			portfolio: "https://github.com/petejacobs99",
		},
	]


	return (
		<div>
			<h1>ABOUT BUCKETS TEAM</h1>
			<div className={styles.PhotoContainer}>
			{photoSets.map((photoSet, i) => (
				<AboutEachOfUs 
					key={i}
					name={photoSet.name}
					originalUrl={photoSet.originalUrl}
					hoverUrl={photoSet.hoverUrl}
					portfolio={photoSet.portfolio}
				/>
			))}
		</div>
		</div>
		
	);
} 
