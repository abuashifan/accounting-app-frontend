import SvgIcon from '@jamescoyle/vue-icon';
import { 
  mdiAccount, 
  mdiBank,
  mdiBookOpen,
  mdiCartOutline,
  mdiCashFast,
  mdiDomain
} from '@mdi/js';
export const mdiPaths = {
  mdiAccount, 
  mdiBank,
  mdiBookOpen,
  mdiCartOutline,
  mdiCashFast,
  mdiDomain
};

export default {
  install (app) {
    app.component('SvgIcon', SvgIcon);
  },
};