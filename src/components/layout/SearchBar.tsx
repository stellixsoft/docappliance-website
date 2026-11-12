"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchIcon } from "./icons";
import styles from "./Header.module.css";

/** Site search box. Submits to /search?q=… (search page to be built with the backend). */
export function SearchBar() {
  const router = useRouter();
  const [q, setQ] = useState("");
  return (
    <form
      className={styles.search}
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (q.trim()) router.push(`/search?q=${encodeURIComponent(q.trim())}`);
      }}
    >
      <label className={styles.srOnly} htmlFor="searchbar">
        Search
      </label>
      <div className={styles.searchField}>
        <input
          id="searchbar"
          type="search"
          placeholder="What can we help you find?"
          autoComplete="off"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" aria-label="Submit search" className={styles.searchSubmit}>
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}
