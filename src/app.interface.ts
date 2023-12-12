export interface IShippingField{
    problem: string;
    technology: string;
    thirdStep: IThirdStep;
    mentor: boolean;
    steps: string;
}

export interface IThirdStep{
    hours: number;
    task: string;
}

export interface ISelectValue{
    value: string;
    label: string;
}