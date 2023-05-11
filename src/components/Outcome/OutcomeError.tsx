import EmojiPng from "../../images/😕.png";

interface Props {
  changeInput: boolean;
}

const OutcomeError = ({ changeInput }: Props): JSX.Element => {
  return (
    <div className="flex flex-col w-full justify-center items-center max-w-[327px] mt-[24px] gap-[24px] md:max-w-[689px] md:gap-[44px] lg:max-w-[736px]">
      <img src={EmojiPng} alt="emoji" />
      <div className="flex flex-col w-full justify-center items-center gap-[24px]">
        <h1
          className={`font-bold text-[18px] lg:text-[20px] ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          }`}
        >
          No Definitions Found
        </h1>
        <p className="font-normal text-[16px] text-center leading-[24px] text-[#757575] lg:text-[18px]">
          Sorry pal, we couldn't find definitions for the word you were looking
          for. You can try the search again at later time or head to the web
          instead.
        </p>
      </div>
    </div>
  );
};

export default OutcomeError;
