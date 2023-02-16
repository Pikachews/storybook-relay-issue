import React from 'react';
import { makeDecorator } from "@storybook/addons";
import { ReactRelayContext } from "react-relay";
import { createMockEnvironment } from "relay-test-utils";

export default makeDecorator({
  name: "withRelayEnvironment",
  parameterName: "relay",
  wrapper: (storyFn, context) => {
    const environment = createMockEnvironment();

    return (
      <ReactRelayContext.Provider value={{ environment }}>
        <>{storyFn(context)}</>
      </ReactRelayContext.Provider>
    );
  },
});
