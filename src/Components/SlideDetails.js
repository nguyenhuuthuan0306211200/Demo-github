import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const SlidesDetails = () => {
  const images = [
    {
      original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
      thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
      description: 'Bìa sách chính'
    },
    {
        original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        description: 'Bìa sách chính'
      },
      {
        original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        description: 'Bìa sách chính'
      },
      {
        original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        description: 'Bìa sách chính'
      },
      {
        original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
        description: 'Bìa sách chính'
      },
     {
      original: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
      thumbnail: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/435/244/products/sg11134201221202ucumy8655kvff-e77f3ab8-38e3-4fd5-8470-0f8d19a9ba9b.jpg?v=1672971355547',
      description: 'Bìa sách chính'
    },
  ];
  const renderItem = (item) => (
    <div style={{ height: '350px'}}>
      <img src={item.original} alt={item.description} style={{ width:'100%', height:'100%', objectFit: 'contain' }} />
    </div>
  );

  // Tùy chỉnh kích thước của thumbnail
//   const renderThumbInner = (item) => (
//     <div style={{ width: '100px', height: '100px' }}>
//       <img src={item.thumbnail} alt={item.description} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//     </div>
//   );

  return (
    // <div style={{ width: '40vw' }}>
      <ImageGallery
        items={images}
        renderItem={renderItem}           
        // renderThumbInner={renderThumbInner} 
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        showIndex={true}
        slideOnThumbnailOver={true}
        thumbnailPosition='left'
        autoPlay={true}
      />
    // </div>
  );
};

export default SlidesDetails;