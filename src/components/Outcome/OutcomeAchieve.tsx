import IconPlay from "../../images/icon-play.svg";
interface Props {
  changeInput: boolean;
  saveInfo: any;
}

const OutcomeAchieve = ({ changeInput, saveInfo }: Props): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-[31px]">
      <div className="flex w-full flex-row justify-between items-center ">
        <h2
          className={`font-bold text-[32px] leading-[40.96px] ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          }`}
        >
          {saveInfo[0].word} <br />
          <span className="font-normal text-[18px] leading-[24px] text-[#A445ED]">
            {saveInfo[0].phonetic}
          </span>
        </h2>
        <div className="relative w-[48px] h-[48px]">
          <audio
            className="hidden"
            controls
            autoPlay
            src={saveInfo[0]?.phonetics[0]?.audio}
          />
          <img
            className="w-[48px] h-[48px] absolute"
            src={IconPlay}
            alt="icon-play"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[19px] items-center justify-start">
        <h3
          className={`${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } text-[18px] leading-[23.04px] font-normal`}
        >
          noun
        </h3>
        <hr
          className={`w-full h-[1px]  ${
            changeInput
              ? "bg-[#E9E9E9], opacity-[1]"
              : "bg-[#3A3A3A], opacity-[0.25]"
          }`}
        />
      </div>

      <div className="w-full flex flex-col gap-[26px] jusitfy-center items-start">
        <h3 className="text-[16px] leading-[20.48px] text-[#757575] font-normal">
          Meaning
        </h3>
        <div className="w-full flex flex-col gap-[13px]">
          <div className="flex flex-row gap-[20px] justify-start items-start">
            <div className="bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]" />
            <p
              className={`text-[15px] ${
                changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              } leading-[24px] font-normal`}
            >
              {saveInfo[0]?.meanings[0]?.definitions[0]?.definition}
            </p>
          </div>
          <div className="flex flex-row gap-[20px] justify-start items-start">
            <div
              className={
                saveInfo[0]?.meanings[0]?.definitions[1]?.definition
                  ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                  : "hidden"
              }
            />
            <p
              className={`text-[15px] ${
                changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              } leading-[24px] font-normal`}
            >
              {saveInfo[0]?.meanings[0]?.definitions[1]?.definition}
            </p>
          </div>
          <div className="flex flex-row gap-[20px] justify-start items-start">
            <div
              className={
                saveInfo[0]?.meanings[0]?.definitions[2]?.definition
                  ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                  : "hidden"
              }
            />
            <p
              className={`text-[15px] ${
                changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              } leading-[24px] font-normal`}
            >
              {saveInfo[0]?.meanings[0]?.definitions[2]?.definition}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeAchieve;
