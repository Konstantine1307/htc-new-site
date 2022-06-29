import "photoswipe/dist/photoswipe.css";
import { Item } from "react-photoswipe-gallery";

function GalleryImgCard(props) {
  const smallItemStyles = {
    cursor: "pointer",
    objectFit: "cover",
    width: "175px",
    height: "175px",
    borderRadius: "10px",
    boxShadow: "0 .5rem 1rem rgba(0, 0, 0, 0.5)",
  };
  return (
    <Item
      cropped
      original={props.original}
      thumbnail={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      caption={`<h2>${props.alt}</h2>`}
    >
      {({ ref, open }) => (
        <img
          style={smallItemStyles}
          src={props.src}
          alt={props.alt}
          ref={ref}
          onClick={open}
          className="hover:opacity-50 hover:scale-110 duration-300"
        />
      )}
    </Item>
  );
}

export default GalleryImgCard;
