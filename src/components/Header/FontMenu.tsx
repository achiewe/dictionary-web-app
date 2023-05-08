interface Props {
  changeInput: boolean;
  font: boolean;
  setSwitchFont(switchFont: number): void;
}

const FontMenu = ({ changeInput, font, setSwitchFont }: Props): JSX.Element => {
  return (
    <div
      className={`w-[183px] h-[152px] rounded-[16px] ${
        changeInput ? "bg-[#FFFFFF]" : "bg-[#1F1F1F]"
      } p-[24px] flex flex-col items-start gap-[16px] ${
        changeInput ? "shadow-light" : "shadow-dark"
      }  absolute top-[40px] right-[0px] ${font ? "block" : "hidden"}`}
    >
      <h3
        onClick={() => {
          setSwitchFont(1);
        }}
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Sans Serif
      </h3>
      <h3
        onClick={() => {
          setSwitchFont(2);
        }}
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Serif
      </h3>
      <h3
        onClick={() => {
          setSwitchFont(3);
        }}
        className={`text-[18px] ${
          changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
        } leading-[24px] font-bold cursor-pointer hover:text-[#A445ED]`}
      >
        Mono
      </h3>
    </div>
  );
};

export default FontMenu;
