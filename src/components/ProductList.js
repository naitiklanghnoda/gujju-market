import React, { useState } from 'react';
import './ProductList.css';
import products from './productData'; // Import the products array from productData.js

function ProductList() {
  const [showDetails, setShowDetails] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the search query

  const toggleDetails = (productId) => {
    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [productId]: !prevDetails[productId],
    }));
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <ul className="product-items">
        {filteredProducts.map((product) => (
          <li key={product.id} className="product-item">
            <div className='befordetail'>
              <div className="product-photo" onClick={() => openImageModal(product.images)}>
                <img src={product.images} alt={product.name} />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>ID: {product.id}</p>
                <p>Price: {product.price.toFixed(2)} ₹</p>
              </div>
            </div>
            <div className='afterdetail'>
              <button onClick={() => toggleDetails(product.id)}>
                {showDetails[product.id] ? 'Hide Details' : 'Show Details'}
              </button>
              {showDetails[product.id] && (
                <div>
                  <p>{product.description}</p>
                  <div className='morephotolist'>
                    {product.morePhotos.map((morePhoto) => (
                      <div
                        key={morePhoto}
                        className="more-photo"
                        onClick={() => openImageModal(morePhoto)}
                      >
                        <img src={morePhoto} alt={`More Photo`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeImageModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Full Size" className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
