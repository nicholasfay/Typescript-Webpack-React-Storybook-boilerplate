import * as React from "react";
import styles from "./InjectableFormik.module.css";

interface IProps {
  test?: string;
}

export class InjectableFormik extends React.Component<IProps> {
  render() {
    return <div className={styles.test}>"Sanity Check"</div>;
  }
}
