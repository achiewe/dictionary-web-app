import logoDictionary from "../images/logo.svg";
import ArrowDownSvg from "../images/icon-arrow-down.svg";

const Header = (): JSX.Element => {
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <img
        className="w-[28.05px] h-[32px]"
        src={logoDictionary}
        alt="logo dictionary"
      />
      <div className="flex flex-row gap-[16px] items-center">
        <div className="flex flex-row gap-[16px] items-center">
          <h3 className="text-[14px] font-bold leading-[24px]"> Serif</h3>
          <img src={ArrowDownSvg} alt="arrow svg" />
        </div>
        <div className="w-[1px] h-[32px] bg-[#E9E9E9]"> </div>
        <div className="flex flex-row gap-[12px] items-center">
          <input />
        </div>
      </div>
    </div>
  );
};

export default Header;
