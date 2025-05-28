import { ToastTypes, useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import SuccessIcon from "@/assets/icons/SuccessIcon";
import ErrorIcon from "@/assets/icons/ErrorIcon";
import { ReactNode } from "react";

interface IToastTypeProps {
  className: string;
  containerClassName: string;
  Icon: typeof ErrorIcon;
}

const toastPropsByType: Record<ToastTypes, IToastTypeProps | null> = {
  error: {
    className: "text-red-600",
    containerClassName: "border-red-500/50 p-5",
    Icon: ErrorIcon,
  },
  success: {
    className: "text-emerald-600",
    containerClassName: "border-emerald-500/50 p-5",
    Icon: SuccessIcon,
  },
  default: null,
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        className,
        toastType,
        ...props
      }) {
        const toastTypeProps = toastPropsByType[toastType];

        return (
          <Toast
            key={id}
            className={cn(
              className,
              toastTypeProps?.containerClassName,
              "flex",
            )}
            {...props}
          >
            {!!toastTypeProps && (
              <div className={cn(toastTypeProps.className)}>
                <toastTypeProps.Icon className="size-6" />
              </div>
            )}
            <div className="grid gap-1 flex-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
