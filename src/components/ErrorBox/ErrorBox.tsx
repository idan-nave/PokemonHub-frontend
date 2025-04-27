import { useEffect, useState } from "react";
import styles from '@/components/ErrorBox/ErrorBox.module.css';

export interface ErrArrType {
  errArr: Error[];
}

export const ErrorBox = (errArr: ErrArrType) => {
  const [errorList, setErrorList] = useState<Error[]>([]);

  useEffect(() => {
    setErrorList(errArr.errArr);
    return () => {
      setErrorList([]);
    }
  }, [errArr]);

  const uniqueErrList = errorList.filter((error, index, self) =>
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