import { AccountBalanceWallet, AccountBox, Add, Dashboard, Inventory, Logout, Receipt, ShoppingBag } from '@mui/icons-material';
import React from 'react'
import DrawerList from '../../../component/DrawerList';
const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-black" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBag className="text-black" />,
    activeIcon: <ShoppingBag className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <Inventory className="text-black" />,
    activeIcon: <Inventory className="text-white" />,
  },
  {
    name: "Add Product",
    path: "/seller/add-product",
    icon: <Add className="text-black" />,
    activeIcon: <Add className="text-white" />,
  },
  {
    name: "Payment",
    path: "/seller/payment",
    icon: <AccountBalanceWallet className="text-black" />,
    activeIcon: <AccountBalanceWallet className="text-white" />,
  },
  {
    name: "Transactions",
    path: "/seller/transaction",
    icon: <Receipt className="text-black" />,
    activeIcon: <Receipt className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-black" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <Logout className="text-black" />,
    activeIcon: <Logout className="text-white" />,
  },
];


const SellerDrawerList = ({toggleDrawer}:{toggleDrawer:any}) => {
  return (
      <DrawerList menu={menu} menu2={menu2} toggleDrawer = {toggleDrawer} />
  )
}

export default SellerDrawerList