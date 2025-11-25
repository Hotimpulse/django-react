export interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
