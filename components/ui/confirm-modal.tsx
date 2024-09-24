import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogDescription,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alertDialog";

interface ConfirmModalProps {
  children: React.ReactNode;
  header: string;
  description: string;
  onConfirm: () => void;
  disabled: boolean;
}

export const ConfirmModal = ({
  children,
  header,
  description,
  disabled,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>{header}</AlertDialogHeader>
        <AlertDialogDescription>{description}</AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm} disabled={disabled}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
