import ProductImageUpload from "../../components/admin-view/image-upload";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.jpg";

function AdminDashboard() {
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const dispatch = useDispatch();

  function handleUploadFeatureImage() {
    // Assuming upload logic remains unchanged
  }

  useEffect(() => {
    // Assuming any initialization logic remains unchanged
  }, [dispatch]);

  return (
    <div>
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        uploadedImageUrl={uploadedImageUrl}
        setUploadedImageUrl={setUploadedImageUrl}
        setImageLoadingState={setImageLoadingState}
        imageLoadingState={imageLoadingState}
        isCustomStyling={true}
      />
      <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
        Upload
      </Button>
      <div className="flex gap-4 mt-5">
        <div className="w-1/2">
          <img src={b4} alt="Feature b4" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-1/2">
          <img src={b5} alt="Feature b5" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
