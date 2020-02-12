import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export interface FormInputPropsModel {
    type?: string;
    name?: string;
    label?: string;
    value?: string
    onChange?: ()=> void
}