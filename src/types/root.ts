import type { ComponentClass, FunctionComponent } from 'react';

// material-ui
// material-ui
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

// types
// types
import type { AuthProps } from './auth';
import type { CalendarProps } from './calendar';
import type { MenuProps } from './menu';
import type { SnackbarProps } from './snackbar';
import type { KanbanStateProps } from './kanban';
import { type InvoiceProps } from './invoice';

// ==============================|| ROOT TYPES  ||============================== //

export type RootStateProps = {
  auth: AuthProps;
  calendar: CalendarProps;
  menu: MenuProps;
  snackbar: SnackbarProps;
  kanban: KanbanStateProps;
  invoice: InvoiceProps;
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export type OverrideIcon =
  | (OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
      muiName: string;
    })
  | ComponentClass<any>
  | FunctionComponent<any>;

export interface GenericCardProps {
  title?: string;
  primary?: string | number | undefined;
  secondary?: string;
  content?: string;
  image?: string;
  dateTime?: string;
  iconPrimary?: OverrideIcon;
  color?: string;
  size?: string;
}
