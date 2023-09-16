import styles from './DeleteUser.module.scss' // Import your DeleteUser.module.scss file
import { deleteUser } from '../../utilities/users-service' // Import your user deletion function

export default function DeleteUser({ user, setUser }) {
  async function handleDeleteUser() {
    try {
      await deleteUser() // Call the deleteUser function
      setUser(null)
    } catch (error) {
      // Handle any error that may occur during deletion
      console.error("An error occurred while deleting the user.")
    }
  }

  return (
    <div className={styles.DeleteUser}>
      <div>{user.name}</div>
      <div className={styles.email}>{user.email}</div>
      <button className="btn-sm" onClick={handleDeleteUser}>DELETE ACCOUNT</button>
    </div>
  )
}
