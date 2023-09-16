import { useState, useEffect } from 'react'
import Stars from '../DynamicStars/DynamicStars'
import styles from './ReviewForm.module.scss'

export default function ReviewForm({ user, itemId, addReview }) {
    const [formData, setFormData] = useState({
        user: user._id,
        body: '',
        rating: 0,
        item: itemId
    })
    const [error, setError] = useState('')
    const [complete, setComplete] = useState(false)
    useEffect(function () {
        const clearForm = (userId, itemId) => {
            const newFormData = {
                user: userId,
                body: '',
                rating: 0,
                item: itemId
            }
            setFormData(newFormData)
            setComplete(false)
        }
        clearForm(itemId, user._id)
    }, [itemId])
    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            if (formData.rating && formData.body) {
                addReview(itemId, formData)
                setComplete(true)
            }
        } catch (error) {
            setError('Oops! Something went wrong!')
        }
    }
    const handleChange = (e, idx) => {
        idx ?
            setFormData({ ...formData, rating: idx }) :
            setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const completed = () => (
            <h3 className={styles.completed}>Thanks for the review!</h3>
    )
    const showForm = () => (
        <form className={styles.ReviewForm} onSubmit={(e) => handleSubmit(e)}>
            <label className={styles.label}>Tell us your thoughts: </label>
            <Stars
                className={styles.rating}
                formData={formData}
                handleChange={handleChange}
            />
            <textarea
                name="body"
                value={formData.body}
                onChange={(e) => handleChange(e)}
                className={styles.input}
            />
            <input className={styles.submit} type="submit" value="SUBMIT" />
            <p className="error-message">&nbsp;{error}</p>
        </form>
    )
    return complete ? completed() : showForm()
}