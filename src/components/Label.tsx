import styles from './Label.module.css';

interface LabelProps {
  children: string;
  variant?: 'flat' | 'nested';
}

export default function Label({
  children,
  variant = 'flat',
}: LabelProps) {
  return (
    <span className={styles[variant]}>{children}</span>
  );
}
