'use client';

import Image from "next/image";

interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit" | "reset";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: () => void;
}

const CustomButton = ({
  isDisabled = false,
  btnType = "button",
  containerStyles = "",
  textStyles = "",
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => (
  <button
    disabled={isDisabled}
    type={btnType}
    className={`flex items-center justify-center px-6 py-3 rounded-full font-semibold text-base transition duration-300 ease-in-out ${
      isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
    } ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-5 h-5 ml-2">
        <Image
          src={rightIcon}
          alt="Right icon"
          layout="fill"
          objectFit="contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;

