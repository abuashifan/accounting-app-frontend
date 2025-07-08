import { perusahaanMenu } from './perusahaanMenu'
import { bukuBesarMenu } from './bukuBesarMenu'
import { kasBankMenu } from './kasBankMenu'
import { penjualanMenu } from './penjualanMenu'
import { pembelianMenu } from './pembelianMenu'
import { persediaanMenu } from './persediaanMenu'
import { asetTetapMenu } from './asetTetapMenu'
import { laporanMenu } from './laporanMenu'
import { pengaturanMenu } from './pengaturanMenu'

export const sidebarMenus = [
  {
    id: 1,
    label: "Dashboard",
    icon: "dashboard",
    route: "/dashboard",
    children: []
  },
  {
    id: 2,
    label: "Perusahaan",
    icon: "office",
    route: "/users",
    children: perusahaanMenu
  },
  {
    id: 3,
    label: "Buku Besar",
    icon: "book",
    route: "/bukubesar",
    children: bukuBesarMenu
  },
  {
    id: 4,
    label: "Kas & Bank",
    icon: "bank",
    route: "/kasbank",
    children: kasBankMenu
  },
  {
    id: 5,
    label: "Penjualan",
    icon: "cart",
    route: "/penjualan",
    children: penjualanMenu
  },
  {
    id: 6,
    label: "Pembelian",
    icon: "cash",
    route: "/pembelian",
    children: pembelianMenu
  },
  {
    id: 7,
    label: "Persediaan",
    icon: "inventory",
    route: "/persediaan",
    children: persediaanMenu
  },
  {
    id: 8,
    label: "Aset Tetap",
    icon: "asset",
    route: "/asettetap",
    children: asetTetapMenu
  },
  {
    id: 9,
    label: "Laporan",
    icon: "report",
    route: "/laporan",
    children: laporanMenu
  },
  {
    id: 10,
    label: "Pengaturan",
    icon: "settings",
    route: "/pengaturan",
    children: pengaturanMenu
  }
]
