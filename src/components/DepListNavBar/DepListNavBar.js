import { useState } from "react"
import styles from "./DepListNavBar.module.scss"
import { useNavigate } from "react-router-dom";

export default function DepListNavBar({departments}) {
  const [activeDepNav, setActiveDepNav] = useState('')
  const navigate = useNavigate()

  async function handleOnClick(dep) {
    setActiveDepNav(dep.name)
    navigate(`/home/${dep.name}/categories`)
    window.location.reload()
  }

  const deps = departments.map((dep) => (
    <span
      key={dep.name}
      className={dep === activeDepNav ? styles.active : ""}
      onClick={() => handleOnClick(dep)}
    >
      {dep.name}
    </span>
  ))
  
  return (
    <span className={styles.DepartmentList}>
      {deps}
    </span> 
  )
}