import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ContainerWrapper({ children }: Props) {
  return <div className="w-full max-w-[360px] m-auto pb-31">{children}</div>;
}

export default ContainerWrapper;
