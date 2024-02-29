import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}

/* the variant is passed form the home screen */
