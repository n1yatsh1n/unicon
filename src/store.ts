import { makeAutoObservable } from "mobx";
import { ISelectValue } from "./app.interface";

export class FormStore {
  problem = "";
  technology: ISelectValue[] = [];
  hours: ISelectValue = { value: "", label: "" };
  task: ISelectValue = { value: "", label: "" };
  mentor = true;
  steps = "";

  constructor() {
    makeAutoObservable(this);
  }
}

export const formStore = new FormStore();
