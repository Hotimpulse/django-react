import { IButtonProps } from '@src/shared/interfaces/IButtonProps';
import styles from './button.module.scss';

export default function MyButton({ type, buttonText, onClick, disabled, style }: IButtonProps) {
  return (
    <button type={type || 'button'} onClick={onClick} disabled={disabled} style={style} className={styles['my-button']}>
      {buttonText}
    </button>
  );
}
