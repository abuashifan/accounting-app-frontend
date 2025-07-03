// IconList.js
import SvgIcon from '@jamescoyle/vue-icon';
import {
  mdiAccount,
  mdiBank,
  mdiBookOpen,
  mdiCartOutline,
  mdiCashFast,
  mdiDomain
} from '@mdi/js';

// Daftar icon path
export const mdiPaths = {
  account: mdiAccount,
  bank: mdiBank,
  book: mdiBookOpen,
  cart: mdiCartOutline,
  cash: mdiCashFast,
  domain: mdiDomain
};

// Plugin untuk register component dan provide icons
export default {
  install(app) {
    app.component('SvgIcon', SvgIcon);

    // Inject icon paths agar bisa diakses via inject()
    app.provide('mdiPaths', mdiPaths);
  }
};
