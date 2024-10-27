// ProductCard.jsx
import PropTypes from "prop-types";
import { FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

const ProductCard = ({ imgSrc, price, name, category }) => {
  return (
    <Card className="flex-shrink-0 mx-auto shadow-md rounded-lg border">
      <div className="relative">
        <CardMedia
          component="img"
          height="140"
          image={imgSrc}
          alt={name}
          className="object-contain bg-gray-100"
        />
        <IconButton
          className="absolute top-2 right-2 bg-white shadow-md"
          aria-label="favorite"
        >
          <FavoriteBorder />
        </IconButton>
      </div>
      <CardContent className="p-4 text-center">
        <Typography variant="h6" className="text-lg font-semibold mb-2">
          {price}
        </Typography>
        <Typography variant="body1" className="text-sm text-gray-600 mb-1">
          {name}
        </Typography>
        <Typography variant="body2" className="text-xs text-gray-500">
          {category}
        </Typography>
      </CardContent>
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
