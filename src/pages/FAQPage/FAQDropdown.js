import { useState } from "react";
import styles from "./FAQDropdown.module.scss";

const FAQDropdown = ({ title, faqs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;
