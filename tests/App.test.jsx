import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe('<App/>', () => {
    test('should work', () => {
        render(<App />)
        screen.debug()
    })
})