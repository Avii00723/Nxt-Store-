type NavLink = {
  href: string;
  label:string;
};

export const links:NavLink[] = [
    {href:'/',label:'Home'},
    {href:'/about',label:'About'},
    {href:'/products',label:'Products'},
    {href:'/favorites',label:'Favorites'},
    {href:'/reviews',label:'Reviews'},
    {href:'/cart',label:'Cart'},
    {href:'/orders',label:'Orders'},
    {href:'/admin/sales',label:'dashboard'},
];

export const adminLinks:NavLink[] = [
    {href:'/admin/sales',label:'sales'},
    {href:'/admin/products',label:'my products'},
    {href:'/admin/products/create',label:'create product'},
];