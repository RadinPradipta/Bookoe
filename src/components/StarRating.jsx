import PropTypes from 'prop-types';

const StarRating = ({ rating, totalStars = 5 }) => {
  const filledStars = Math.round(rating * totalStars) / totalStars;
  const emptyStars = totalStars - filledStars;

  const renderStar = (index, filled) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={filled ? "gold" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(renderStar(i, true));
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(renderStar(i + filledStars, false));
  }

  return <div className="flex gap-1">{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

export default StarRating;
