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
        { id: "dslr_cameras", label: "DSLR" },
        { id: "vintage_cameras", label: "Vintage Camera" },
        { id: "digital_cameras", label: "Digital Camera" },
        { id: "laptops_gaming", label: "Gaming Laptop" },
        { id: "laptops_professional", label: "Professional Laptop" },
        { id: "laptops_personal", label: "Personal Use Laptop" },
        { id: "keyboards", label: "Keyboard" },
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
      label: "DSLR",
      path: "/shop/listing",
    },
    {
      id: "vintage_cameras",
      label: "Vintage Camera",
      path: "/shop/listing",
    },
    {
      id: "digital_cameras",
      label: "Digital Camera",
      path: "/shop/listing",
    },
    {
      id: "laptops_gaming",
      label: "Gaming Laptop",
      path: "/shop/listing",
    },
    {
      id: "laptops_professional",
      label: "Professional Laptop",
      path: "/shop/listing",
    },
    {
      id: "laptops_personal",
      label: "Personal Use Laptop",
      path: "/shop/listing",
    },
    {
      id: "keyboards",
      label: "Keyboard",
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
    dslr_cameras: "DSLR",
    vintage_cameras: "Vintage Camera",
    digital_cameras: "Digital Camera",
    laptops_gaming: "Gaming Laptop",
    laptops_professional: "Professional Use Laptop",
    laptops_personal: "Personal Use Laptop",
    keyboards: "Keyboard",
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
      { id: "dslr_cameras", label: "DSLR" },
      { id: "vintage_cameras", label: "Vintage Camera" },
      { id: "digital_cameras", label: "Digital Camera" },
      { id: "laptops_gaming", label: "Gaming Laptop" },
      { id: "laptops_professional", label: "Professional Laptop" },
      { id: "laptops_personal", label: "Personal Use Laptop" },
      { id: "keyboards", label: "Keyboard" },
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
  