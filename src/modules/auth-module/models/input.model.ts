import { ChangeEvent } from "react";

export interface Input {
    label: string;
    fieldError?: string;
    type: string;
    value: string;
    name: string;
    onInput: (e: ChangeEvent<HTMLInputElement>)=> void;
    onBlur: (e:ChangeEvent<HTMLInputElement>)=> void;
}
