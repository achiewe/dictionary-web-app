import logoDictionary from "../../images/logo.svg";
import ArrowDownSvg from "../../images/icon-arrow-down.svg";
import MoonSvgLight from "../../images/icon-moonLight.svg";
import MoonSvgDark from "../../images/icon-moonDark.svg";
import FontMenu from "./FontMenu";
import { useState } from "react";

interface Props {
  changeInput: boolean;
  setChangeInput(changeInput: boolean): void;
  switchFont: number;
  setSwitchFont(switchFont: number): void;
}

const HeaderComponent = ({
  changeInput,
  setChangeInput,
  switchFont,
  setSwitchFont,
}: Props): JSX.Element => {
  const HandleClick = () => {
    setChangeInput(!changeInput);
  };
  const [font, setFont] = useState<boolean>(false);
  const ClickFont = () => {
    setFont(!font);
  };
  return (
    <div className="w-full flex flex-row justify-between items-center max-w-[375px] md:max-w-[768px]">
      <img
        className="w-[28.05px] h-[32px] md:w-[32px] md:h-[36.5px]"
        src={logoDictionary}
        alt="logo dictionary"
      />
      <div className="flex flex-row gap-[16px] items-center md:gap-[18px]">
        <div
          onClick={ClickFont}
          className="flex flex-row relative gap-[16px] items-center cursor-pointer"
        >
          <h3
            className={`text-[14px] font-bold leading-[24px] ${
              changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
            }`}
          >
            {switchFont === 1
              ? "Sans-serif"
              : switchFont === 2
              ? "Serif"
              : "Mono"}
          </h3>
          <img src={ArrowDownSvg} alt="arrow svg" />
          <FontMenu
            changeInput={changeInput}
            font={font}
            setSwitchFont={setSwitchFont}
          />
        </div>
        <div className="w-[1px] h-[32px] bg-[#E9E9E9]"> </div>
        <div className="flex flex-row gap-[12px] items-center">
          <label
            className={`tablet:ml-[1.625rem] relative inline-block w-[40px] h-[20px] ${
              changeInput ? "bg-[#757575]" : "bg-[#A445ED]"
            } rounded-[10px]`}
          >
            <input
              className="peer opacity-0 w-0 h-0"
              type="checkbox"
              onClick={HandleClick}
            />
            <span className="absolute cursor-pointer inset-0 rounded-[10px] bg-gray dark:bg-purple before:absolute before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[3px] before:bottom-[3px] before:bg-white peer-focus-visible:bg-violet-500 peer-checked:before:translate-x-[20px] before:transition-all"></span>
          </label>
        </div>
        <img src={changeInput ? MoonSvgLight : MoonSvgDark} alt="moon svg" />
      </div>
    </div>
  );
};

export default HeaderComponent;
