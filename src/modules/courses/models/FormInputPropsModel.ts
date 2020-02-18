import { ChangeEvent, ChangeEventHandler } from "react";

export interface FormInputPropsModel {
    type?: string;
    name?: string;
    label?: string;
    value?: string | number | undefined;
    onChange?:  ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}