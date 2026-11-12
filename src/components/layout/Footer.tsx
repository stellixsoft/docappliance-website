import Link from "next/link";
import { legalNav } from "@/data/site";
import { FooterBlocks } from "./FooterBlocks";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer>
      <div className={styles.cms}>
        <FooterBlocks />
      </div>
      <div className={styles.legal}>
        <ul className={styles.legalList}>
          {legalNav.map((item) => (
            <li key={item.href} className={styles.legalItem}>
              <Link href={item.href} className={styles.legalLink}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.disclaimer}>
          While every effort is made to ensure that the information on this website is correct and current, we are not
          responsible for errors and/or omissions. There may be occurrences when information on our website or in our
          catalog may contain typographical errors, inaccuracies or omissions that may pertain to product pricing and
          availability. We reserve the right to correct and/or update any content on this website without notice
          (including after you have submitted your order).
        </p>
      </div>
    </footer>
  );
}
