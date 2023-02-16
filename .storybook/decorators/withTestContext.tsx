import React from 'react';
import { makeDecorator } from "@storybook/addons";
import {TestContextProvider} from '../../src/TestContext'


export default makeDecorator({
  name: "withTestContext",
  parameterName: "test",
  wrapper: (storyFn, context) => {
    return (
      <TestContextProvider>
        <>{storyFn(context)}</>
      </TestContextProvider>
    );
  },
});
