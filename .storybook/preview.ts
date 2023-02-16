import withRelayEnvironment from "./decorators/withRelayEnvironment"
import withTestContext from "./decorators/withTestContext";

export const decorators = [withRelayEnvironment, withTestContext];

export const parameters = {
  backgrounds: {
    default: 'light',
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}