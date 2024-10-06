import {
  IconStar,
  IconStarFilled,
  IconStarHalfFilled,
} from '@tabler/icons-react';

export interface ReviewRatingProps {
  rating: number;
  size?: number;
}

export default function ReviewRating(props: ReviewRatingProps) {
  function ratingToStars(nota: number) {
    const estrelas = [];
    for (let i = 1; i <= 5; i++) {
      if (nota >= i) {
        estrelas.push(<IconStarFilled size={props.size ?? 12} />);
      } else if (nota >= i - 0.5) {
        estrelas.push(<IconStarHalfFilled size={props.size ?? 12} />);
      } else {
        estrelas.push(<IconStar size={props.size ?? 12} />);
      }
    }
    return estrelas;
  }

  return (
    <div className="flex gap-0.5 text-emerald-400">
      {ratingToStars(props.rating)}
    </div>
  );
}
