import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../src/App";
import { getBooks } from "../src/services/getBooks";

describe('<App/>', () => {

    // test('fetch json', async () => {
    //     const data = await getBooks()
    //     console.log('responseeeeeeeeeeee', data)
    //     expect(data).toBeDefined()
    // })

    test('should work', async () => {
        const user = userEvent.setup()

        render(<App />);

        const allCards = screen.getAllByRole('article')
        expect(allCards).toBeDefined()

        const firstCardBook = allCards[0]
        const secondCardBook = allCards[1]
        expect(firstCardBook && secondCardBook).toBeDefined()

        const titleBook = firstCardBook.querySelector('h2 span').textContent

        const addButton1 = firstCardBook.querySelector('button')
        expect(addButton1).toBeDefined()
        const addButton2 = secondCardBook.querySelector('button')
        expect(addButton2).toBeDefined()

        await user.click(addButton1)
        await user.click(addButton2)

        expect(firstCardBook.className).toContain('opacity-10')

        const toReadListButton = screen.getByRole('button', { name: 'toList' })
        expect(toReadListButton).toBeDefined()

        await user.click(toReadListButton)

        const readList = document.querySelector('aside')
        expect(readList.className).not.toContain('none')

        const sectionRead = screen.getByTestId('container-read-books')
        expect(sectionRead).toBeDefined()
        expect(sectionRead.childNodes.length).toBe(2)

        const readCard = sectionRead.querySelector('article')
        expect(readCard).toBeDefined()

        const titleReadCard = readCard.querySelector('h3').textContent
        expect(titleReadCard).toBe(titleBook)

        const removeReadButton = readCard.querySelector('button[aria-label="remove-read-button"]')
        expect(removeReadButton).toBeDefined()

        await user.click(removeReadButton)

        expect(sectionRead.childNodes.length).toBe(1)

    });
})
