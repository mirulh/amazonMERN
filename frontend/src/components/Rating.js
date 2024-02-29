function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i //i - icon used
          className={
            rating >= 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i //i - icon used
          className={
            rating >= 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i //i - icon used
          className={
            rating >= 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i //i - icon used
          className={
            rating >= 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span>
        <i //i - icon used
          className={
            rating >= 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        />
      </span>
      <span> {numReviews} reviews</span>
    </div>
  );
}

export default Rating;

/* NOTES: 
In the provided code, the <span> element is used to wrap an <i> (icon) element representing a star rating. In React, <span> is a generic inline container that doesn't add any semantic meaning to its content. It's often used for styling purposes or to group elements together without introducing any structural changes.

In this specific context, the <span> element doesn't directly affect the functionality of the rating component; it's primarily used for styling or potentially for targeting the icon with CSS selectors. It could also be used to group the icon element with other elements if needed in the future.
 */
