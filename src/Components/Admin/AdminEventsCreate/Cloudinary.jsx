import axios from "axios";
import { useState } from "react";

export default function Cloudinary() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    const handleImageUpload = async () => {
      if (!image) return;
  
      // Upload the image to Cloudinary
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'mibutaca');
  
      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dwbvvo9u2/image/upload',
        formData
      );
  
      // Get the image URL from the Cloudinary response
      const imageUrl = cloudinaryResponse.data.secure_url;
      setImageUrl(imageUrl);
  
      // Send the image URL to your server (you'll need to implement the server-side part)
    //   sendImageUrlToServer(imageUrl);
    };

    // const sendImageUrlToServer = async (imageUrl) => {
    //   // Implement the code to send the image URL to your server here (using axios or fetch)
    //   // Example:
    //   // const response = await axios.post('/your-server-endpoint', { imageUrl });
    //   // Handle the server response as needed
    // };
  
    return (
      <div>
        <input type="file" onChange={handleImageChange} />
        <button onClick={handleImageUpload}>Upload Image</button>
        {/* {imageUrl && (
          <div>
            <p>Image URL:</p>
            <Image publicId={imageUrl}>
              <Transformation width="200" height="200" crop="fit" />
            </Image>
          </div>
        )} */}
      </div>
    );

}