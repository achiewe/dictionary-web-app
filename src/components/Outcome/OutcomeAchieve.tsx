import NewWindowSvg from "../../images/icon-new-window.svg";
import ObjectTypes from "../../type";

import IconPlay from "../../images/icon-play.svg";
interface Props {
  changeInput: boolean;
  saveInfo: ObjectTypes | null;
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
          {saveInfo?.word} <br />
          <span className="font-normal text-[18px] leading-[24px] text-[#A445ED] md:text-[24px] md:leading-[29.05px]">
            {saveInfo?.phonetic}
          </span>
        </h2>
        <div className="relative w-[48px] h-[48px] md:w-[75px] md:h-[75px]">
          <audio
            className="hidden"
            controls
            autoPlay
            src={saveInfo?.phonetics[0]?.audio}
          />
          <svg
            className="hover"
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <g fill="#A445ED" fill-rule="evenodd">
              <circle
                className="circle opacity-25 transition-opacity cursor-pointer"
                cx="37.5"
                cy="37.5"
                r="37.5"
              />
              <path d="M29 27v21l21-10.5" className="path cursor-pointer" />
            </g>
          </svg>
        </div>
      </div>
      <div className="w-full flex flex-row gap-[16px] items-center justify-start md:gap-[32px]">
        <h3
          className={`${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } text-[18px] leading-[23.04px] font-bold md:text-[24px] md:leading-[25.18px]`}
        >
          {saveInfo?.meanings[0].partOfSpeech}
          {/* noun */}
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
          {saveInfo?.meanings[0]?.definitions.map(
            (definiton: any, index: any) => (
              <div
                className="flex flex-row gap-[20px] justify-start items-start"
                key={index}
              >
                <div
                  className={
                    definiton?.definition
                      ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                      : "hidden"
                  }
                />
                <p
                  className={`text-[15px] md:text-[18px] md:leading-[24px] ${
                    changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
                  } leading-[24px] font-normal`}
                >
                  {definiton?.definition}
                </p>
              </div>
            )
          )}
        </div>

        <div
          className={
            saveInfo?.meanings[0]?.synonyms[0]
              ? "flex flex-row flex-wrap justify-start items-center gap-[24px] md:gap-[40px]"
              : "hidden"
          }
        >
          <h3 className="font-normal text-[16px] leading-[19.36px] text-[#757575] md:text-[20px] md:leading-[20.98px]">
            Synonyms
          </h3>
          {saveInfo?.meanings[0]?.synonyms.map((synonym, index) => (
            <p
              key={index}
              className="text-[#A445ED] text-[16px] leading-[19.36px] font-bold md:text-[20px] md:leading-[20.98px] md:cursor-pointer md:hover:underline"
            >
              {synonym}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-row gap-[21px] items-center justify-start md:gap-[32px]">
        <h3
          className={`${
            changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
          } text-[18px] leading-[21.78px] font-bold md:text-[24px] md:leading-[25.18px]`}
        >
          {saveInfo?.meanings[1].partOfSpeech}
          {/* verb */}
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
        {saveInfo?.meanings[1]?.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <div className="flex flex-row gap-[20px] justify-start items-start">
                <div
                  className={
                    definition?.definition
                      ? "bg-[#8F19E8] w-[5px] h-[5px] border-none rounded-full mt-[8px]"
                      : "hidden"
                  }
                />
                <p
                  className={`text-[15px] md:text-[18px] ${
                    changeInput ? "text-[#2D2D2D]" : "text-[#FFFFFF]"
                  } leading-[24px] font-normal`}
                >
                  {definition?.definition}
                </p>
              </div>
              <div className="flex w-full flex-col gap-[13px] justify-start items-start">
                <p
                  className={
                    definition?.example
                      ? "font-normal text-[15px] text-[#757575] leading-[24px] md:text-[18px]"
                      : "hidden"
                  }
                >
                  {`"${definition?.example}"`}
                </p>
              </div>
            </div>
          );
        })}

        <div
          className={
            saveInfo?.meanings[1]?.synonyms[0]
              ? "flex flex-row flex-wrap justify-start items-center gap-[24px] md:gap-[40px]"
              : "hidden"
          }
        >
          <h3 className="font-normal text-[16px] leading-[19.36px] text-[#757575] md:text-[20px] md:leading-[20.98px]">
            Synonyms
          </h3>
          {saveInfo?.meanings[1]?.synonyms.map((synonym, index) => (
            <p
              key={index}
              className="text-[#A445ED] text-[16px] leading-[19.36px] font-bold md:text-[20px] md:leading-[20.98px] md:cursor-pointer md:hover:underline"
            >
              {synonym}
            </p>
          ))}
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
              href={saveInfo?.sourceUrls[0]}
              target="_blank"
            >
              {saveInfo?.sourceUrls[0]}
            </a>
            <img src={NewWindowSvg} alt="new window" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutcomeAchieve;
