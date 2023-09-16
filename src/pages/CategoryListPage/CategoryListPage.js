import "../../scss/styles.scss";
import styles from "../ItemListPage/ItemListPage.module.scss";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import * as catsAPI from "../../utilities/catDep-api";
/* import Hamburger from "../../components/Hamburger/Hamburger";
import HamMenu from "../../components/HamMenu/HamMenu"; */
import CategoryList from "../../components/CategoryList/CategoryList";
/* import department from "../../../models/department"; */

export default function CategoryListPage({ departments }) {
  const [drop, setDrop] = useState(false);
  const [categories, setCategories] = useState([]);
  const [activeDep, setActiveDep] = useState('');
  const departmentsRef = useRef([]);
  /* const navigate = useNavigate(); */
  const params = useParams();

  useEffect(function () {
    async function getCats() {
      const cats = await catsAPI.getAllCategories();
      departmentsRef.current = cats.reduce((deps, cat) => {
        const dep = cat.department.name;
        return deps.includes(dep) ? deps : [...deps, dep];
      }, []);
      /* const cats = await catsAPI.getCategories(params.depName); */
      setCategories(cats);
      /* setActiveDep(departmentsRef.current[0]); */
      const actDepName = departmentsRef.current.find((dep) => dep === params.depName);
      setActiveDep(actDepName);
    }
    getCats();
  }, []);

  /* useEffect(function () {
    async function getDeps() {
      const deps = await catsAPI.getDepartments();
      console.log(deps)
      departmentsRef.current = [...deps]
      let name = departmentsRef.current[0].name
      let id = departmentsRef.current[0]._id
      setActiveDep(name);
      getCats(name, id)
    }
    getDeps();
  }, []);

  async function getCats(depName, depId) {
    const data = await catsAPI.getCategories(depId);
    setCategories(data);
    setActiveDep(depName)
  } */

  const handleHover = () => {
    setDrop(!drop);
  };

  /* async function handleClick(depName, catName) {
    navigate(`/home/${depName}/${catName}/items`);
  } */

  return (
    <div className={styles.App}>
      <div className={styles.categoryList}>
        <CategoryList
          categories={categories.filter(cat => cat.department.name === activeDep)}
          /* categories={categories} */
          setCategories={setCategories} 
          /* onClick={handleClick} */
        />
      </div>
    </div>
  );
}