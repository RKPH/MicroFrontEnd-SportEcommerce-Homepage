// ProductCard.jsx
import PropTypes from "prop-types";
import { FavoriteBorder } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";

const ProductCard = ({ imgSrc, price, name, category }) => {
  return (
    <Card className="flex-shrink-0 w-72  rounded-md border overflow-hidden hover:border-black mb-2 shadow-none">
      {/* Product Image */}
      <div className="relative aspect-square">
        <img
          src={imgSrc}
          alt={name}
          className="object-cover bg-gray-100 h-full w-full"
        />
      </div>

      {/* Product Content */}
      <div className="p-1 px-3 text-left flex flex-col space-y-1">
        <span className="text-base font-medium truncate">{price}</span>
        <span className="text-base text-gray-800 font-bold truncate">
          {name}
        </span>
        <span className="text-sm text-gray-500">{category}</span>
      </div>
    </Card>
  );
};

// PropTypes validation to ensure proper props are passed
ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
