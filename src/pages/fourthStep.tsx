import ContainerWrapper from "../components/containerWrapper";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formStore } from "../store";

const FourthStep = () => {
  const [previous, setPrevious] = useState<boolean>(formStore.mentor);
  const history = useNavigate();
  return (
    <ContainerWrapper>
      <div className="relative" style={{ height: "var(--tg-viewport-height)" }}>
        <div className="text-[var(--tg-theme-text-color)] text-lg font-bold leading-snug">
          Would you like to work with a previous mentor?
        </div>
        <div className="flex mt-[16px]">
          <div
            className={`w-[90px] h-[52px] flex items-center justify-center rounded-lg text-center text-[17px] hover:cursor-pointer ${
              previous
                ? "bg-[var(--tg-theme-button-color)] bg-opacity-10 text-[var(--tg-theme-button-text-color)] font-medium"
                : "text-[var(--tg-theme-text-color)] bg-[var(--tg-theme-hint-color)]"
            }`}
            onClick={() => {
              setPrevious(true);
              formStore.mentor = true;
            }}
          >
            Yes
          </div>
          <div
            className={`w-[72px] h-[52px] flex items-center justify-center rounded-lg text-center text-[17px] ml-[12px] hover:cursor-pointer ${
              !previous
                ? "bg-[var(--tg-theme-button-color)] bg-opacity-10 text-[var(--tg-theme-button-text-color)] font-medium"
                : "text-[var(--tg-theme-text-color)] bg-[var(--tg-theme-hint-color)]"
            }`}
            onClick={() => {
              setPrevious(false);
              formStore.mentor = false;
            }}
          >
            No
          </div>
        </div>
        <div className="absolute bottom-[16px]">
          <div className="flex items-center w-full h-4 mt-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="var(--tg-theme-button-color)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9497 6.29289C13.3403 5.90236 13.3403 5.2692 12.9497 4.87867C12.5592 4.48815 11.9261 4.48815 11.5355 4.87867L6.58579 9.82842L4.46447 7.7071C4.07394 7.31658 3.44078 7.31658 3.05025 7.7071C2.65973 8.09763 2.65973 8.73079 3.05025 9.12131L5.87868 11.9497C6.26921 12.3403 6.90237 12.3403 7.29289 11.9497L12.9497 6.29289Z"
                fill="white"
              />
            </svg>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-button-color)]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="var(--tg-theme-button-color)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9497 6.29289C13.3403 5.90236 13.3403 5.2692 12.9497 4.87867C12.5592 4.48815 11.9261 4.48815 11.5355 4.87867L6.58579 9.82842L4.46447 7.7071C4.07394 7.31658 3.44078 7.31658 3.05025 7.7071C2.65973 8.09763 2.65973 8.73079 3.05025 9.12131L5.87868 11.9497C6.26921 12.3403 6.90237 12.3403 7.29289 11.9497L12.9497 6.29289Z"
                fill="white"
              />
            </svg>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-button-color)]" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                fill="var(--tg-theme-button-color)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.9497 6.29289C13.3403 5.90236 13.3403 5.2692 12.9497 4.87867C12.5592 4.48815 11.9261 4.48815 11.5355 4.87867L6.58579 9.82842L4.46447 7.7071C4.07394 7.31658 3.44078 7.31658 3.05025 7.7071C2.65973 8.09763 2.65973 8.73079 3.05025 9.12131L5.87868 11.9497C6.26921 12.3403 6.90237 12.3403 7.29289 11.9497L12.9497 6.29289Z"
                fill="white"
              />
            </svg>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-button-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-button-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]" />
            </div>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-secondary-bg-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-secondary-bg-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]"></div>
            </div>
          </div>
          <div className="w-full flex justify-between mt-[32px]">
            <button
              onClick={() => history("/third_step")}
              className="w-[174px] h-[50px] px-6 bg-[var(--tg-theme-hint-color)] bg-opacity-10 rounded-xl justify-center items-center inline-flex"
            >
              <div className="text-center  text-[var(--tg-theme-text-color)] text-[17px] leading-snug">
                Previous
              </div>
            </button>
            <button
              onClick={() => history("/fifth_step")}
              className="w-[174px] h-[50px] px-6 bg-[var(--tg-theme-button-color)] rounded-xl justify-center items-center inline-flex"
            >
              <div className="text-center text-[var(--tg-theme-button-text-color)] leading-snug">
                Next
              </div>
            </button>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default FourthStep;
