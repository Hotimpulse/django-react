import { IButtonProps } from '@src/shared/interfaces/IButtonProps';

export default function MyButton({ buttonText, onClick, disabled, style }: IButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
      className="w-max tablet:h-fit tablet:p-2 phone:h-[40px] phone:px-2 rounded-sm transition duration-300 ease-out hover:ease-in 
      text-color4 dark:text-white hover:text-color1 dark:hover:text-color1
  text-sm tablet:text-xl cursor-pointer disabled:cursor-not-allowed disabled:opacity-75
  bg-color1 dark:bg-green-500 dark:hover:bg-yellow-500 hover:bg-yellow-500 active:bg-yellow-200"
    >
      {buttonText}
    </button>
  );
}
