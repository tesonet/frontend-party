import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "./Button";

const stories: any = storiesOf("components/Button", module);

stories.add("default", () => <Button>Log In</Button>);
stories.add("loading", () => <Button isLoading={true}>Log In</Button>);
