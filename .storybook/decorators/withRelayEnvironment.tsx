import React from 'react';
import { makeDecorator } from "@storybook/addons";
import { RelayEnvironmentProvider } from "react-relay";
import { createMockEnvironment } from "relay-test-utils";

export default makeDecorator({
  name: "withRelayEnvironment",
  parameterName: "relay",
  wrapper: (storyFn, context) => {
    const environment = createMockEnvironment();

    return (
      <RelayEnvironmentProvider environment={environment}>
        <>{storyFn(context)}</>
      </RelayEnvironmentProvider>
    );
  },
});
