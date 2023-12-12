import { IShippingField } from "../app.interface";
import ContainerWrapper from "../components/containerWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formStore } from "../store";

const FifthStep = () => {
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingField>();

  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    formStore.steps = data.steps;
    if (!errors.steps) {
      //@ts-ignore
      window.Telegram.WebApp.sendData(JSON.stringify(formStore));
      //@ts-ignore
      window.Telegram.WebApp.close();
    }
  };
  return (
    <ContainerWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative"
        style={{ height: "var(--tg-viewport-height)" }}
      >
        <h1 className="text-[var(--tg-theme-text-color)] text-lg font-bold leading-snug">
          What steps lead to the problem?
        </h1>
        <textarea
          {...register("steps", { required: "textarea missed" })}
          className="w-full h-[163px] resize-none rounded-md mt-[16px] p-[16px] border border-inherit focus:outline-none text-[var(--tg-theme-text-color)] bg-[var(--tg-theme-secondary-bg-color)]"
          placeholder="Placeholder"
          style={{
            border:
              errors.steps?.message === "textarea missed"
                ? "1px solid red"
                : "none",
          }}
          defaultValue={formStore.steps}
          onChange={(e) => (formStore.steps = e.target.value)}
        />

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
          </div>
          <div className="w-full flex justify-between mt-[32px]">
            <button
              onClick={() => history("/fourth_step")}
              className="w-[174px] h-[50px] px-6 bg-[var(--tg-theme-hint-color)] bg-opacity-10 rounded-xl justify-center items-center inline-flex"
            >
              <div className="text-center text-[var(--tg-theme-text-color)] text-[17px] leading-snug">
                Previous
              </div>
            </button>
            <button
              onClick={() => handleSubmit}
              className="w-[174px] h-[50px] px-6 bg-[var(--tg-theme-button-color)] rounded-xl justify-center items-center inline-flex"
            >
              <div className="text-center text-[var(--tg-theme-button-text-color)] text-[17px] leading-snug">
                Submit
              </div>
            </button>
          </div>
        </div>
      </form>
    </ContainerWrapper>
  );
};

export default FifthStep;
