import React, { useState } from "react";
import styles from "./FAQPage.module.scss"; 
import FAQDropdown from "./FAQDropdown";

const usersFAQs = [
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the 'Sign Up' button and follow the instructions."
  },
  {
    question: "How can I change my password?",
    answer:
      "You can change your password by going to the 'Account Settings' section and selecting 'Change Password.'"
  }
];

const itemsFAQs = [
  {
    question: "How do I find product information?",
    answer:
      "You can search for products using the search bar or browse categories to find the item you're looking for."
  },
  {
    question: "What's the return policy for items?",
    answer:
      "Our return policy allows returns within 30 days of purchase. Please review our return policy for more details."
  }
];

const techSupportFAQs = [
  {
    question: "My order didn't go through. What should I do?",
    answer:
      "If you encountered an issue with your order, please contact our tech support team at support@example.com."
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order by logging into your account and going to the 'Order History' section."
  }
];

const FAQPage = () => {
  const [drop, setDrop] = useState(false);

  const handleHover = () => {
    setDrop(!drop);
  };
  
  return (
    <> 
      <div className={styles.container}>
        <h1>Frequently Asked Questions</h1>
        <FAQDropdown
          title={
            <span>
              <i className="fas fa-chevron-down"></i> Users
            </span>
          }
          faqs={usersFAQs}
        />
        <FAQDropdown
          title={
            <span>
              <i className="fas fa-chevron-down"></i> Items
            </span>
          }
          faqs={itemsFAQs}
        />
        <FAQDropdown
          title={
            <span>
              <i className="fas fa-chevron-down"></i> Tech Support
            </span>
          }
          faqs={techSupportFAQs}
        />
      </div>
    </>
  );
};

export default FAQPage;
