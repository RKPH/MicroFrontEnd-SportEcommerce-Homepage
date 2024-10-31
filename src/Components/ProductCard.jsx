// ProductCard.jsx
import PropTypes from "prop-types";
import { FavoriteBorder } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";

const ProductCard = ({ imgSrc, price, name, category }) => {
  return (
    <Card className="flex-shrink-0 w-72 h-96 shadow-sm rounded-md border overflow-hidden">
      {/* Product Image */}
      <div className="relative h-3/4">
        <img
          src={imgSrc}
          alt={name}
          className="object-cover bg-gray-100 h-full w-full"
        />
      </div>

      {/* Product Content */}
      <div className="p-1 text-left h-1/4 flex flex-col justify-between">
        <Typography variant="h6" className="text-sm font-medium mb-1 truncate">
          {price}
        </Typography>
        <Typography
          variant="body1"
          className="text-xs text-gray-800 mb-1 truncate"
        >
          {name}
        </Typography>
        <Typography variant="body2" className="text-xs text-gray-500">
          {category}
        </Typography>
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
