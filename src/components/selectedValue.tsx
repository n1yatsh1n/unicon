interface SelectedValueProps {
  value: string;
  onClick: () => void;
}

const SelectedValue: React.FC<SelectedValueProps> = ({value, onClick}) => {
  return (
    <div className="bg-[var(--tg-theme-button-color)] p-[10px] inline-block rounded-lg mr-2 mt-2">
      <div className="flex">
        <p className="text-[var(--tg-theme-button-text-color)] text-[17px] leading-snug mr-[10px]">
          {value}
        </p>
        <div onClick={onClick} className="hover: cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="var(--tg-theme-button-text-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="var(--tg-theme-button-text-color)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectedValue;
