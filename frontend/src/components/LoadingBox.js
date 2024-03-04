import Spinner from 'react-bootstrap/Spinner';

export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

/* 

What does visually-hidden do

For folks using screen readers, though, buttons without text can be absolutely mysterious. They might be announced simply as "button".

The good news is: we can solve this problem without compromising on our design! A VisuallyHidden component will allow us to place text inside this button that will only be made available to people using screen readers. */
