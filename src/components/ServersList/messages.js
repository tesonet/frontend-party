import { defineMessages } from "react-intl";

const scope = "serversList";

export default defineMessages({
  serversListLoadingInProgressMessage: {
    id: `${scope}serversListLoadingInProgress`,
    defaultMessage: "Servers list loading...",
  },
  serversListLoadingFailedMessage: {
    id: `${scope}serversListLoadingFailedMessage`,
    defaultMessage: "Servers list loading failed. Try to refresh the page.",
  },
});
