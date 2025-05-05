import styles from '@/components/ErrorBox/ErrorBox.module.css';

export interface ErrorBoxProps {
  errArr: Error[];
}

export const ErrorBox = (errArr: ErrorBoxProps) => {

  const uniqueErrList = errArr.errArr.filter((error, index, self) =>
    index == self.findIndex((t) => (t.name === error.name))
  );

  return (
    <ul className={styles.box}>
      {uniqueErrList.map((error) => (
        <li key={error.name} className={styles.item}>
          {error.message}
        </li>
      ))}
    </ul>
  );
};