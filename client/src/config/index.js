{/*export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
*/}
export const registerFormControls = [
    {
      name: "userName",
      label: "User Name",
      placeholder: "Enter your username",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
    {
      name: "role", 
      label: "Role",
      placeholder: "Select a role", 
      componentType: "select", 
      options: [
        { id: "user", label: "User" },
        { id: "admin", label: "Admin" },
      ],
    },
  ];
  
    
    {/*{
      name: "userName",
      label: "User Name",
      placeholder: "Enter your user name",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
    {
      name: "role",
      label: "Role",
      componentType: "select",
      options: [
        { value: "user", label: "User" },
        { value: "admin", label: "Admin" },
      ],
    },
  ];
  */}
  
  export const loginFormControls = [
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      componentType: "input",
      type: "password",
    },
  ];
  
  {/*export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "men", label: "Men" },
        { id: "women", label: "Women" },
        { id: "kids", label: "Kids" },
        { id: "accessories", label: "Accessories" },
        { id: "footwear", label: "Footwear" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "nike", label: "Nike" },
        { id: "adidas", label: "Adidas" },
        { id: "puma", label: "Puma" },
        { id: "levi", label: "Levi's" },
        { id: "zara", label: "Zara" },
        { id: "h&m", label: "H&M" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];*/}
  
  export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Description",
      name: "description",
      componentType: "textarea",
      placeholder: "Enter product description",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "drones", label: "Drones" },
        { id: "dslr_cameras", label: "Cameras - DSLR" },
        { id: "vintage_cameras", label: "Cameras - Vintage" },
        { id: "digital_cameras", label: "Cameras - Digital" },
        { id: "laptops_gaming", label: "Laptops - Gaming" },
        { id: "laptops_professional", label: "Laptops - Professional Use" },
        { id: "laptops_personal", label: "Laptops - Personal Use" },
        { id: "keyboards", label: "Keyboards" },
        { id: "mouse", label: "Mouse" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "dji", label: "DJI" }, // Drones
        { id: "parrot", label: "Parrot" },
        { id: "autel", label: "Autel" },
        { id: "gopro", label: "GoPro" },
        { id: "sony", label: "Sony" }, // Cameras
        { id: "canon", label: "Canon" },
        { id: "nikon", label: "Nikon" },
        { id: "leica", label: "Leica" },
        { id: "panasonic", label: "Panasonic" },
        { id: "fujifilm", label: "Fujifilm" },
        { id: "apple", label: "Apple" }, // Laptops and accessories
        { id: "dell", label: "Dell" },
        { id: "hp", label: "HP" },
        { id: "lenovo", label: "Lenovo" },
        { id: "asus", label: "ASUS" },
        { id: "logitech", label: "Logitech" }, // Keyboards and Mouse
        { id: "razer", label: "Razer" },
        { id: "corsair", label: "Corsair" },
        { id: "steelseries", label: "SteelSeries" },
        { id: "msi", label: "MSI" },
        { id: "skydio", label: "Skydio" },
        { id: "powervision", label: "PowerVision" },
        { id: "holystone", label: "Holy Stone" },
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  
  
  {/*export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },
    {
      id: "products",
      label: "Products",
      path: "/shop/listing",
    },
    {
      id: "men",
      label: "Men",
      path: "/shop/listing",
    },
    {
      id: "women",
      label: "Women",
      path: "/shop/listing",
    },
    {
      id: "kids",
      label: "Kids",
      path: "/shop/listing",
    },
    {
      id: "footwear",
      label: "Footwear",
      path: "/shop/listing",
    },
    {
      id: "accessories",
      label: "Accessories",
      path: "/shop/listing",
    },
    {
      id: "search",
      label: "Search",
      path: "/shop/search",
    },
  ];
  
  export const categoryOptionsMap = {
    men: "Men",
    women: "Women",
    kids: "Kids",
    accessories: "Accessories",
    footwear: "Footwear",
  };
  
  export const brandOptionsMap = {
    nike: "Nike",
    adidas: "Adidas",
    puma: "Puma",
    levi: "Levi",
    zara: "Zara",
    "h&m": "H&M",
  };
  
  export const filterOptions = {
    category: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
    brand: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  };
  */}
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },
    {
      id: "products",
      label: "Products",
      path: "/shop/listing",
    },
    {
      id: "drones",
      label: "Drones",
      path: "/shop/listing",
    },
    {
      id: "dslr_cameras",
      label: "Cameras-DSLR",
      path: "/shop/listing",
    },
    {
      id: "vintage_cameras",
      label: "Cameras-Vintage",
      path: "/shop/listing",
    },
    {
      id: "digital_cameras",
      label: "Cameras-Digital",
      path: "/shop/listing",
    },
    {
      id: "laptops_gaming",
      label: "Laptops-Gaming",
      path: "/shop/listing",
    },
    {
      id: "laptops_professional",
      label: "Laptops-Professional Use",
      path: "/shop/listing",
    },
    {
      id: "laptops_personal",
      label: "Laptops-Personal Use",
      path: "/shop/listing",
    },
    {
      id: "keyboards",
      label: "Keyboards",
      path: "/shop/listing",
    },
    {
      id: "mouse",
      label: "Mouse",
      path: "/shop/listing",
    },
    {
      id: "search",
      label: "Search",
      path: "/shop/search",
    },
  ];
  
  export const categoryOptionsMap = {
    drones: "Drones",
    dslr_cameras: "Cameras-DSLR",
    vintage_cameras: "Cameras-Vintage",
    digital_cameras: "Cameras-Digital",
    laptops_gaming: "Laptops-Gaming",
    laptops_professional: "Laptops-Professional Use",
    laptops_personal: "Laptops-Personal Use",
    keyboards: "Keyboards",
    mouse: "Mouse",
  };
  
  export const brandOptionsMap = {
    dji: "DJI",
    parrot: "Parrot",
    autel: "Autel",
    gopro: "GoPro",
    sony: "Sony",
    canon: "Canon",
    nikon: "Nikon",
    leica: "Leica",
    panasonic: "Panasonic",
    fujifilm: "Fujifilm",
    apple: "Apple",
    dell: "Dell",
    hp: "HP",
    lenovo: "Lenovo",
    asus: "ASUS",
    logitech: "Logitech",
    razer: "Razer",
    corsair: "Corsair",
    steelseries: "SteelSeries",
    msi: "MSI",
    skydio: "Skydio",
    powervision: "PowerVision",
    holystone: "Holy Stone",
  };
  
  export const filterOptions = {
    category: [
      { id: "drones", label: "Drones" },
      { id: "dslr_cameras", label: "Cameras-DSLR" },
      { id: "vintage_cameras", label: "Cameras-Vintage" },
      { id: "digital_cameras", label: "Cameras-Digital" },
      { id: "laptops_gaming", label: "Laptops-Gaming" },
      { id: "laptops_professional", label: "Laptops-Professional Use" },
      { id: "laptops_personal", label: "Laptops-Personal Use" },
      { id: "keyboards", label: "Keyboards" },
      { id: "mouse", label: "Mouse" },
    ],
    brand: [
      { id: "dji", label: "DJI" },
      { id: "parrot", label: "Parrot" },
      { id: "autel", label: "Autel" },
      { id: "gopro", label: "GoPro" },
      { id: "sony", label: "Sony" },
      { id: "canon", label: "Canon" },
      { id: "nikon", label: "Nikon" },
      { id: "leica", label: "Leica" },
      { id: "panasonic", label: "Panasonic" },
      { id: "fujifilm", label: "Fujifilm" },
      { id: "apple", label: "Apple" },
      { id: "dell", label: "Dell" },
      { id: "hp", label: "HP" },
      { id: "lenovo", label: "Lenovo" },
      { id: "asus", label: "ASUS" },
      { id: "logitech", label: "Logitech" },
      { id: "razer", label: "Razer" },
      { id: "corsair", label: "Corsair" },
      { id: "steelseries", label: "SteelSeries" },
      { id: "msi", label: "MSI" },
      { id: "skydio", label: "Skydio" },
      { id: "powervision", label: "PowerVision" },
      { id: "holystone", label: "Holy Stone" },
    ],
  };
  
  export const sortOptions = [
    { id: "price-lowtohigh", label: "Price: Low to High" },
    { id: "price-hightolow", label: "Price: High to Low" },
    { id: "title-atoz", label: "Title: A to Z" },
    { id: "title-ztoa", label: "Title: Z to A" },
  ];
  
  export const addressFormControls = [
    {
      label: "Address",
      name: "address",
      componentType: "input",
      type: "text",
      placeholder: "Enter your address",
    },
    {
      label: "City",
      name: "city",
      componentType: "input",
      type: "text",
      placeholder: "Enter your city",
    },
    {
      label: "Pincode",
      name: "pincode",
      componentType: "input",
      type: "text",
      placeholder: "Enter your pincode",
    },
    {
      label: "Phone",
      name: "phone",
      componentType: "input",
      type: "text",
      placeholder: "Enter your phone number",
    },
    {
      label: "Notes",
      name: "notes",
      componentType: "textarea",
      placeholder: "Enter any additional notes",
    },
  ];
  