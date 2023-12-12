import { IShippingField } from "../app.interface";
import ContainerWrapper from "../components/containerWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { formStore } from "../store";

const FirstStep = () => {
  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IShippingField>();

  const onSubmit: SubmitHandler<IShippingField> = (data) => {
    formStore.problem = data.problem;
    if (!errors.problem) {
      history("/second_step");
    }
  };
  return (
    <ContainerWrapper>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative"
        style={{ height: "var(--tg-viewport-height)" }}
      >
        <h1
          className="text-lg font-bold leading-snug"
          style={{ color: "var(--tg-theme-text-color)" }}
        >
          Describe the problem
        </h1>

        <textarea
          {...register("problem", { required: "textarea missed" })}
          className="w-full h-[163px] rounded-md mt-[16px] p-[16px] border resize-none border-inherit focus:outline-none text-[var(--tg-theme-text-color)] bg-[var(--tg-theme-secondary-bg-color)]"
          placeholder="Placeholder"
          style={{
            border:
              errors.problem?.message === "textarea missed"
                ? "1px solid red"
                : "none",
          }}
          defaultValue={formStore.problem}
        />

        <div className="absolute bottom-[16px]">
          <div className="flex items-center w-full h-4 mt-[32px]">
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-button-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]" />
            </div>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-secondary-bg-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-secondary-bg-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]"></div>
            </div>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-secondary-bg-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-secondary-bg-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]"></div>
            </div>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-secondary-bg-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-secondary-bg-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]"></div>
            </div>
            <div className="h-1 w-[70px] bg-[var(--tg-theme-secondary-bg-color)]" />
            <div className="w-4 h-4 flex items-center justify-center rounded-xl bg-[var(--tg-theme-secondary-bg-color)]">
              <div className="w-2 h-2 rounded-xl bg-[var(--tg-theme-secondary-bg-color)]"></div>
            </div>
          </div>
          <button className="w-full h-[50px] mt-[36px] px-6 bg-[var(--tg-theme-button-color)] rounded-xl justify-center items-center inline-flex text-center text-[var(--tg-theme-button-text-color)] text-[17px] leading-snug">
            Next
          </button>
        </div>
      </form>
    </ContainerWrapper>
  );
};

export default FirstStep;
