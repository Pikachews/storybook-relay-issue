import { StoryFn } from "@storybook/react"
import { useTestContext } from "../TestContext"

export default {
    title: "TestContext"
}

export const NoError: StoryFn = () => {
    // using a normal context directly in a Story properly sees the context
    const context = useTestContext()

    return <div>Test!</div>
}
