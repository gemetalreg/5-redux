import styles from "./InputField.module.css";
import type { InputFieldProps } from "./InputField.props";

function InputField(props: InputFieldProps) {
  return <input type="text" {...props}/>;
};

export default InputField;