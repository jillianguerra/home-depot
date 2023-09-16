import styles from './SearchBar.module.scss';
import { useState } from 'react';

export default function SearchBar({ onSearch }) { 
  const [inputText, setInputText] = useState('')

  const handleEnterKey = async (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        placeholder="SEARCH..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleEnterKey}
      />
    </div>
  );
}
