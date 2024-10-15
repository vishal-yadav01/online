import { toast } from "react-toastify";

export const Add = (mes) => {
  toast.success(mes, {
    position: "top-left",
  });
};

export const Remove = (mes) => {
  toast.error(mes, {
    position: "top-left",
  });
};
