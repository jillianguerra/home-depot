import styles from "./CategoryList.module.scss";
/* import * as catsAPI from '../../utilities/catDep-api'; */
import CatListItem from '../CatListItem/CatListItem';

export default function CategoryList({ setCategories, categories }) {
    const cats = categories.map(cat =>
        <CatListItem
            key={cat._id}
            category={cat}
            setCategories={setCategories}
            categories={categories}
        />
    );
    return (
        <main className={styles.categories}>
            {cats}
        </main>
    );

}