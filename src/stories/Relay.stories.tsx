import { StoryFn } from "@storybook/react"
import { useRelayEnvironment } from "react-relay"

export default {
    title: "Relay"
}

const TestComponent = () => {
    // using useRelayEnvironment in a child component properly sees the relay environment
    const environment = useRelayEnvironment()

    return <div>Test!</div>
}

export const NoError: StoryFn = () => {
    return <TestComponent />
}

export const WithError: StoryFn = () => {
    // using useRelayEnvironment directly in a Story does not appear to see the relay environment
    const environment = useRelayEnvironment()

    return <div>Test!</div>
}
