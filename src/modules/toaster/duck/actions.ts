import { createAction } from '@redux/createAction';

import { Toaster, ToasterType } from './model';

export enum ToasterActionType {
  Show = 'TOASTER_SHOW',
  Close = 'TOASTER_CLOSE',
  CloseLast = 'TOASTER_CLOSE_LAST',
  CloseAll = 'TOASTER_CLOSE_ALL',
}

const show = (toaster: Toaster) =>
  createAction(ToasterActionType.Show, { toaster });

export const toasterManagerActions = {
  close: (id: string) => createAction(ToasterActionType.Close, { id }),
  closeLast: () => createAction(ToasterActionType.CloseLast),
  closeAll: () => createAction(ToasterActionType.CloseAll),
  success: (toaster: Toaster) =>
    show({ ...toaster, toasterType: ToasterType.Success }),
  error: (toaster: Toaster) =>
    show({ ...toaster, toasterType: ToasterType.Error }),
  warning: (toaster: Toaster) =>
    show({ ...toaster, toasterType: ToasterType.Warning }),
  info: (toaster: Toaster) =>
    show({ ...toaster, toasterType: ToasterType.Info }),
};
