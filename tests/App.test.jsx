import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";

describe('<App/>', () => {
    test('should work', async () => {
        const user = userEvent.setup()

        render(<App />);

        const allCards = screen.getAllByRole('article')
        expect(allCards).toBeDefined()

        const firstCard = allCards[0]

        const addButton = firstCard.querySelector('button')
        expect(addButton).toBeDefined()

        await user.click(button)

        expect(firstCard.className).toContain('opacity-10')



    });
})
