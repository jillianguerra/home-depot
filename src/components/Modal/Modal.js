import styles from './Modal.module.scss';

export default function Modal({ isOpen, isClose, title, body }) {
    return (
        isOpen && (
            <div className={styles.ModalOverlay}>
                <div className={styles.ModalContent}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    <span className={styles.CloseBtn} onClick={isClose}>
                    &times;
                </span>
                </div>
            </div>
        )
    )
}