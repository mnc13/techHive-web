import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner_1.png";
import bannerTwo from "../../assets/banner_2.png";
import bannerThree from "../../assets/banner_3.png";

import {
  //Airplay,
  ChevronLeftIcon,
  ChevronRightIcon,
  //Heater,
  //Images,
  //Shirt,
  //ShoppingBasket,
  //WashingMachine,
  Waypoints,
  Camera,
  Laptop,
  Keyboard,
  Mouse,
  Film,
  Aperture,
  LaptopMinimal,
  Computer,
  ScanEye,
  Webcam,
  Clapperboard,
  LoaderPinwheel,
  Contrast,
  ServerCog,
  ScreenShare,
  MonitorSpeaker,
  //Newspaper,
  ServerCrash,
  SquareMousePointer,
  TrainFront,
  ScanFace,
  Cpu,
  GalleryThumbnails,
  Apple,
  Crosshair,
  AppWindow,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
//import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import { View } from "lucide-react";

const categoriesWithIcon = [
  { id: "drones", label: "Drones", icon: Waypoints },
  { id: "dslr_cameras", label: "Cameras-DSLR", icon: Aperture },
  { id: "vintage_cameras", label: "Cameras-Vintage", icon: Film },
  { id: "digital_cameras", label: "Cameras-Digital", icon: Camera },
  { id: "laptops_gaming", label: "Laptops-Gaming", icon: Laptop },
  { id: "laptops_professional", label: "Laptops-Professional Use", icon: LaptopMinimal },
  { id: "laptops_personal", label: "Laptops-Personal Use", icon: Computer },
  { id: "keyboards", label: "Keyboards", icon: Keyboard },
  { id: "mouse", label: "Mouse", icon: Mouse },
];
const brandsWithIcon = [
  { id: "dji", label: "DJI", icon: Waypoints },
  { id: "parrot", label: "Parrot", icon: ScanEye, },
  { id: "autel", label: "Autel", icon: Webcam },
  { id: "gopro", label: "GoPro", icon: Clapperboard },
  { id: "sony", label: "Sony", icon: LoaderPinwheel },
  { id: "canon", label: "Canon", icon: Contrast },
  { id: "nikon", label: "Nikon", icon: Camera },
  { id: "leica", label: "Leica", icon: ScanFace },
  { id: "panasonic", label: "Panasonic", icon: Crosshair },
  { id: "fujifilm", label: "Fujifilm", icon: AppWindow },
  { id: "apple", label: "Apple", icon: Apple },
  { id: "dell", label: "Dell", icon: ScreenShare },
  { id: "hp", label: "HP", icon: ServerCog },
  { id: "lenovo", label: "Lenovo", icon: ServerCrash },
  { id: "asus", label: "ASUS", icon: GalleryThumbnails },
  { id: "logitech", label: "Logitech", icon: SquareMousePointer },
  { id: "razer", label: "Razer", icon: TrainFront },
  { id: "corsair", label: "Corsair", icon: Cpu },
  { id: "steelseries", label: "SteelSeries", icon: Mouse },
  { id: "msi", label: "MSI", icon: MonitorSpeaker },
];
{/*const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];*/}

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNavigateToListingPage = useCallback((getCurrentItem, section) => {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }, [navigate]);

  const handleGetProductDetails = useCallback((getCurrentProductId) => {
    dispatch(fetchProductDetails(getCurrentProductId));
  }, [dispatch]);

  const handleAddtoCart = useCallback((getCurrentProductId) => {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }, [dispatch, user, toast]);

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) % featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                key={categoryItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {categoryItem.icon && <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />}
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                key={brandItem.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  {brandItem.icon && <brandItem.icon className="w-12 h-12 mb-4 text-primary" />}
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Feature Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    key={productItem.id}
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;







{/*import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner_1.png";
import bannerTwo from "../../assets/banner_2.png";
import bannerThree from "../../assets/banner_3.png";

import {
  Airplay,
  //BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  //CloudLightning,
  Heater,
  Images,
  Shirt,
  //ShirtIcon,
  ShoppingBasket,
  //UmbrellaIcon,
  WashingMachine,
  //WatchIcon,
  Waypoints,
  Camera,
  Laptop,
  Keyboard,
  Mouse,
  Film,
  Aperture,
  LaptopMinimal,
  Computer,

} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

{/*const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];
*
const categoriesWithIcon = [
  { id: "drones", label: "Drones", Waypoints },
  { id: "dslr_cameras", label: "Cameras-DSLR", icon: Aperture },
  { id: "vintage_cameras", label: "Cameras-Vintage", icon: Film },
  { id: "digital_cameras", label: "Cameras-Digital", icon: Camera },
  { id: "laptops_gaming", label: "Laptops-Gaming", icon: Laptop },
  { id: "laptops_professional", label: "Laptops-Professional Use", icon: LaptopMinimal },
  { id: "laptops_personal", label: "Laptops-Personal Use", icon: Computer },
  { id: "keyboards", label: "Keyboards", icon: Keyboard },
  { id: "mouse", label: "Mouse", icon: Mouse },
];
const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];

{/*

const brandsWithIcon = [
  { id: "dji", label: "DJI", icon: DroneIcon },
  { id: "parrot", label: "Parrot", icon: ScanEye, },
  { id: "autel", label: "Autel", icon: Webcam },
  { id: "gopro", label: "GoPro", icon: Clapperboard },
  { id: "sony", label: "Sony", icon: LoaderPinwheel },
  { id: "canon", label: "Canon", icon: View },
  { id: "nikon", label: "Nikon", icon: Camera },
  { id: "leica", label: "Leica", icon: ScanFace },
  { id: "panasonic", label: "Panasonic", icon: Crosshair },
  { id: "fujifilm", label: "Fujifilm", icon: AppWindow },
  { id: "apple", label: "Apple", icon: Apple },
  { id: "dell", label: "Dell", icon: ScreenShare },
  { id: "hp", label: "HP", icon: ServerCog },
  { id: "lenovo", label: "Lenovo", icon: ServerCrash },
  { id: "asus", label: "ASUS", icon: GalleryThumbnails },
  { id: "logitech", label: "Logitech", icon: SquareMousePointer },
  { id: "razer", label: "Razer", icon: TrainFront },
  { id: "corsair", label: "Corsair", icon: Cpu },
  { id: "steelseries", label: "SteelSeries", icon: Mouse },
  { id: "msi", label: "MSI", icon: MonitorSpeaker },
];
function ShoppingHome() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);
  
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  
  const { user } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  console.log(productList, "productList");

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((slide, index) => (
              <img
                src={slide?.image}
                key={index}
                className={`${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
              />
            ))
          : null}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) %
                featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide + 1) % featureImageList.length
            )
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <Card
                onClick={() =>
                  handleNavigateToListingPage(categoryItem, "category")
                }
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <Card
                onClick={() => handleNavigateToListingPage(brandItem, "brand")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                  <span className="font-bold">{brandItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <ShoppingProductTile
                    handleGetProductDetails={handleGetProductDetails}
                    product={productItem}
                    handleAddtoCart={handleAddtoCart}
                  />
                ))
              : null}
          </div>
        </div>
      </section>

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;



{/*
import { Button } from "@/components/ui/button";
import bannerOne from "../../assets/banner_1.png";
import bannerTwo from "../../assets/banner_2.png";
import bannerThree from "../../assets/banner_3.png";

import droneImage from "/img/d2.jpg";
import dslrImage from "/img/c1.jpg";
import vintageCameraImage from "/img/c3.jpg";
import digitalCameraImage from "/img/c2.jpg";
import gamingLaptopImage from "/img/L1.jpg";
import workLaptopImage from "/img/L2.jpg";
import personalLaptopImage from "/img/L3.jpg";
import keyboardImage from "/img/k1.jpg";
import mouseImage from "/img/m1.jpg";

import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts, fetchProductDetails } from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";

const categoriesWithImages = [
  { id: "drones", label: "Drones", image: droneImage },
  { id: "dslr_cameras", label: "Cameras-DSLR", image: dslrImage },
  { id: "vintage_cameras", label: "Cameras-Vintage", image: vintageCameraImage },
  { id: "digital_cameras", label: "Cameras-Digital", image: digitalCameraImage },
  { id: "laptops_gaming", label: "Laptops-Gaming", image: gamingLaptopImage },
  { id: "laptops_professional", label: "Laptops-Professional Use", image: workLaptopImage },
  { id: "laptops_personal", label: "Laptops-Personal Use", image: personalLaptopImage },
  { id: "keyboards", label: "Keyboards", image: keyboardImage },
  { id: "mouse", label: "Mouse", image: mouseImage },
];

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector((state) => state.shopProducts);
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/shop/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({ title: "Product is added to cart" });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [featureImageList]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[600px] overflow-hidden">
        {featureImageList &&
          featureImageList.length > 0 &&
          featureImageList.map((slide, index) => (
            <img
              src={slide?.image}
              key={index}
              className={`${
                index === currentSlide ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
            />
          ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) =>
                (prevSlide - 1 + featureImageList.length) % featureImageList.length
            )
          }
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % featureImageList.length)
          }
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithImages.map((categoryItem) => (
              <Card
                key={categoryItem.id}
                onClick={() => handleNavigateToListingPage(categoryItem, "category")}
                className="cursor-pointer hover:shadow-lg transition-shadow"
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={categoryItem.image}
                    alt={categoryItem.label}
                    className="w-16 h-16 mb-4"
                  />
                  <span className="font-bold">{categoryItem.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productList &&
              productList.map((productItem) => (
                <ShoppingProductTile
                  key={productItem.id}
                  product={productItem}
                  onAddToCart={() => handleAddtoCart(productItem.id)}
                  onClick={() => handleGetProductDetails(productItem.id)}
                />
              ))}
          </div>
        </div>
      </section>

      {openDetailsDialog && (
        <ProductDetailsDialog
          product={productDetails}
          onClose={() => setOpenDetailsDialog(false)}
          onAddToCart={() => handleAddtoCart(productDetails.id)}
        />
      )}
    </div>
  );
}

export default ShoppingHome;

*/}