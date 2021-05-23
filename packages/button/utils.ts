import { PropType } from "vue";

type ButtonType = PropType<
  "primary" | "success" | "warning" | "danger" | "info" | "text" | "default"
>;
type ButtonSize = PropType<"medium" | "small" | "mini" | "default">;
type NativeType = PropType<"submit" | "reset" | "button">;

export interface ButtonProps {
  type: ButtonType;
  size: ButtonSize;
  plain: boolean;
  round: boolean;
  circle: boolean;
  loading: boolean;
  disabled: boolean;
  autofocus: boolean;
  nativeType: NativeType;
}
