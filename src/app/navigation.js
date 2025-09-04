export const navigations = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
    { label: 'PAGES', type: 'label' },
    {
      name: 'Masters',
      icon: 'favorite',
      // badge: { value: '15+', color: 'secondary' },
      children: [
        { name: 'Company Details', path: '/pages/company-list', iconText: 'A',accessID:"TR010" },
        { name: 'Bank Masters', path: '/material/buttons', iconText: 'B',accessID:null },
        { name: 'UOM', path: '/material/checkbox', iconText: 'C',accessID:null },
        { name: 'Countries', path: '/material/dialog', iconText: 'D' },
        { name: 'Currency', path: '/material/expansion-panel', iconText: 'E',accessID:null },
        { name: 'Airlines', path: '/material/form', iconText: 'F',accessID:null },
        { name: 'Customers', path: '/pages/customer-list', iconText: 'I',accessID:"TR010"},
        { name: 'Suppliers', path: '/material/menu', iconText: 'M',accessID:null },
        { name: 'Process stage', path: '/material/progress', iconText: 'P',accessID:null },
        { name: 'Colors', path: '/material/radio', iconText: 'R' },
        { name: 'Design Pattern', path: '/material/switch', iconText: 'S' ,accessID:null},
        { name: 'Remarks', path: '/material/slider', iconText: 'S' ,accessID:null},
        { name: 'Grade', path: '/material/snackbar', iconText: 'S' ,accessID:null},
        { name: 'Substance', path: '/material/table', iconText: 'T',accessID:null },
        { name: 'HSN', path: '/material/table', iconText: 'T',accessID:null },
      ],
    },
    {
      name: 'Inventory Managements',
      icon: 'favorite',
      children: [
        { name: 'Products', path: '/charts/hello', iconText: 'P' },
        { name: 'Material', path: '/charts/hello', iconText: 'M' },
      ],
    },
    // {
    //   name: 'Documentation',
    //   icon: 'launch',
    //   type: 'extLink',
    //   path: 'http://demos.ui-lib.com/matx-react-doc/',
    // },
  ];
  