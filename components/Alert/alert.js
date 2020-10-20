import styles from './alert.module.css';

const Alert = props => {
  return <div className={styles.alert}>{props.children}</div>;
};

export default Alert;