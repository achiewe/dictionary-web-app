import NewWindowSvg from "../../images/icon-new-window.svg";

import IconPlay from "../../images/icon-play.svg";
interface Props {
  changeInput: boolean;
  saveInfo: any;
}

const OutcomeAchieve = ({ changeInput, saveInfo }: Props): JSX.Element => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-[31px] max-w-[375px] md:max-w-[689px] md:gap-[44px] lg:max-w-[737px]">
      <div className="flex w-full flex-row justify-between items-center ">
        <h2
          className={`font-bold text-[32px] leading-[40.96px] md:text-[64px] md:leading-[67.14px] ${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          }`}
        >
          {saveInfo[0].word} <br />
          <span className="font-normal text-[18px] leading-[24px] text-[#A445ED] md:text-[24px] md:leading-[29.05px]">
            {saveInfo[0].phonetic}
          </span>
        </h2>
        <div className="relative w-[48px] h-[48px] md:w-[75px] md:h-[75px]">
          <audio
            className="hidden"
            controls
            autoPlay
            src={saveInfo[0]?.phonetics[0]?.audio}
          />
          <img
            className="w-[48px] h-[48px] absolute md:h-[75px] md:w-[75px]"
            src={IconPlay}
            alt="icon-play"
          />
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px] items-center justify-start md:gap-[32px]">
        <h3
          className={`${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } text-[18px] leading-[23.04px] font-bold md:text-[24px] md:leading-[25.18px]`}
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

      <div className="w-full flex flex-col gap-[26px] jusitfy-center items-start md:gap-[36px]">
        <h3 className="text-[16px] leading-[20.48px] text-[#757575] font-normal md:text-[20px] md:leading-[20.98px]">
          Meaning
        </h3>
        <div className="w-full flex flex-col gap-[13px]">
          {saveInfo[0]?.meanings[0]?.definitions.map(
            (giga: any, index: any) => (
              <div
                className="flex flex-row gap-[20px] justify-start items-start"
                key={index}
              >
                <div
                  className={
                    giga?.definition
                      ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                      : "hidden"
                  }
                />
                <p
                  className={`text-[15px] md:text-[18px] md:leading-[24px] ${
                    changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
                  } leading-[24px] font-normal`}
                >
                  {giga?.definition}
                </p>
              </div>
            )
          )}
        </div>

        <div
          className={
            saveInfo[0]?.meanings[0]?.synonyms[0]
              ? "flex flex-row flex-wrap justify-start items-center gap-[24px] md:gap-[40px]"
              : "hidden"
          }
        >
          <h3 className="font-normal text-[16px] leading-[19.36px] text-[#757575] md:text-[20px] md:leading-[20.98px]">
            Synonyms
          </h3>
          {saveInfo[0]?.meanings[0]?.synonyms.map(
            (synonym: [], index: number) => (
              <p
                key={index}
                className="text-[#A445ED] text-[16px] leading-[19.36px] font-bold md:text-[20px] md:leading-[20.98px]"
              >
                {synonym}
              </p>
            )
          )}
        </div>
      </div>
      <div className="w-full flex flex-row gap-[21px] items-center justify-start md:gap-[32px]">
        <h3
          className={`${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } text-[18px] leading-[21.78px] font-bold md:text-[24px] md:leading-[25.18px]`}
        >
          verb
        </h3>
        <hr
          className={`w-full h-[1px]  ${
            changeInput
              ? "bg-[#E9E9E9], opacity-[1]"
              : "bg-[#3A3A3A], opacity-[0.25]"
          }`}
        />
      </div>
      <div className="flex flex-col gap-[17px] items-start justify-center md:gap-[27px]">
        <h3 className="text-[16px] leading-[20.48px] text-[#757575] font-normal md:text-[20px] md:leading-[20.98px]">
          Meaning
        </h3>
        <div className="flex flex-row gap-[20px] justify-start items-start">
          <div
            className={
              saveInfo[0]?.meanings[0]?.definitions[2]?.definition
                ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                : "hidden"
            }
          />
          <div className="flex w-full flex-col gap-[13px] justify-start items-start">
            <p
              className={`text-[15px] md:text-[18px] ${
                changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              } leading-[24px] font-normal`}
            >
              {saveInfo[0]?.meanings[1]?.definitions[0]?.definition}
            </p>
            <p
              className={
                saveInfo[0]?.meanings[1]?.definitions[0]?.example
                  ? "font-normal text-[15px] text-[#757575] leading-[24px] md:text-[18px]"
                  : "hidden"
              }
            >
              {`"${saveInfo[0]?.meanings[1]?.definitions[0]?.example}"`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] w-full justify-start items-center md:gap-[21px]">
        <hr
          className={`w-full h-[1px]  ${
            changeInput
              ? "bg-[#E9E9E9], opacity-[1]"
              : "bg-[#3A3A3A], opacity-[0.25]"
          }`}
        />
        <div className="flex flex-col w-full justify-center items-start gap-[8px] md:flex-row md:gap-[25px] ">
          <h3 className="font-normal underline text-[14px] leading-[16.94px] text-[#757575]">
            Source
          </h3>
          <div className="flex flex-row gap-[15px] w-full md:gap-[8px] ">
            <a
              className={`text-[14px] underline leading-[16.94px] ${
                changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
              } font-normal`}
              href={saveInfo[0].sourceUrls[0]}
            >
              {saveInfo[0].sourceUrls[0]}
            </a>
            <img src={NewWindowSvg} alt="new window" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeAchieve;
