export const Image = ({ src, alt = 'Image' }) => {
  return src ? <img width="300px" src={src} alt={alt} /> : 'No image';
};
