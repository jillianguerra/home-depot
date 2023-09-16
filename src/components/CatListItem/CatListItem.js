import styles from "./CatListItem.module.scss";
/* import * as catsAPI from '../../utilities/catDep-api';
import * as itemsAPI from '../../utilities/items-api'; */
import { Link, useParams } from 'react-router-dom';


export default function CatListItem({ categories, category, handleClick }) {
    /* const navigate = useNavigate(); */

    /* async function handleClick() {
        await itemsAPI.getByCategory(category);
        navigate(`/category/${category}`);
    } */
    const params = useParams();

    return (
        <div className={styles.catListItem} /* onClick={handleClick} */>
            {/* <img className={styles.image} src={category.image} /> */}
            <Link to={`/home/${params.depName}/${category.name}/items`}>
                {/* <img
                    className={styles.image}
                    src="https://images.thdstatic.com/productImages/1d64ea68-9f7f-45d3-ac5e-20b7c8522141/svn/orange-the-home-depot-paint-buckets-05glhd2-64_1000.jpg"
                /> */}
                <img className={styles.image} src={category.image} />
                <div className={styles.name}>{category.name}</div>
            </Link>
        </div>
    )
}