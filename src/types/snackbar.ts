// material-ui
// material-ui
import type { AlertProps, SnackbarOrigin } from '@mui/material';

// ==============================|| SNACKBAR TYPES  ||============================== //

export type SnackbarActionProps = {
  payload?: SnackbarProps;
};

export interface SnackbarProps {
  action: boolean;
  open: boolean;
  message: string;
  anchorOrigin: SnackbarOrigin;
  variant: string;
  alert: AlertProps;
  transition: string;
  close: boolean;
  actionButton: boolean;
  dense: boolean;
  maxStack: number;
  iconVariant: string;
  autoHideDuration: number;
}
