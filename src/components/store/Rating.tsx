import { StarIcon } from "./icons";

/** Five-star rating with partial fill, styled like the live MUI Rating (small). */
export function Rating({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <span className="store-rating" style={{ fontSize: size }} role="img" aria-label={`${value} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="store-rating__star">
            <StarIcon className="store-rating__empty" />
            {fill > 0 && (
              <span className="store-rating__fill" style={{ width: `${fill * 100}%` }}>
                <StarIcon />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
