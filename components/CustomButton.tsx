import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, handleClick, titleStyles, rightIcon, btnType}: CustomButtonProps) => {
  return (
    <button disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${titleStyles}`}>
      {title}</span>
      {rightIcon && <img src={rightIcon} width="20" height="20" alt="right arrow" />}
    </button>
  )
}

export default CustomButton