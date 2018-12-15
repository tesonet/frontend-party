import React from "react";
import history from "../utils/history";

import { Container, Button } from "reactstrap";

const ErrorPage = ({ location }) => (
  <Container className="p-4 col-sm-12 col-md-6 col-lg-4 m-auto">
    <Container className="text-center">
      <img
        alt="doge"
        src="https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif"
      />
      <h5>404 {location.pathname}</h5>
      <Button color="info" onClick={() => history.push("/")}>
        Go Home
      </Button>
    </Container>
  </Container>
);

export default ErrorPage;
