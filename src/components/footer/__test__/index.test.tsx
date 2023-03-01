import { fireEvent, render } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
    it("should render the footer", () => {
        const mockSetThemeHandler = jest.fn();
        const mockProp = {
            theme: {
                id: 1,
                colorHexCode: "#000000",
            },
            "themes": [
                {
                    "id": 1,
                    "colorHexCode": "#000000"
                },
                {
                    "id": 2,
                    "colorHexCode": "#800080"
                },
                {
                    "id": 3,
                    "colorHexCode": "#0000FF"
                },
                {
                    "id": 4,
                    "colorHexCode": "#9B9999"
                }
            ],
            setThemeHandler: mockSetThemeHandler,
        }
        const { getByTestId } = render(<Footer {...mockProp}/>);
        expect(getByTestId("footer")).toBeInTheDocument();
    });
    it("should render the Correct number of buttons", () => {
        const mockSetThemeHandler = jest.fn();
        const mockProp = {
            theme: {
                id: 1,
                colorHexCode: "#000000",
            },
            "themes": [
                {
                    "id": 1,
                    "colorHexCode": "#000000"
                },
                {
                    "id": 2,
                    "colorHexCode": "#800080"
                },
                {
                    "id": 3,
                    "colorHexCode": "#0000FF"
                },
                {
                    "id": 4,
                    "colorHexCode": "#9B9999"
                }
            ],
            setThemeHandler: mockSetThemeHandler,
        }
        const { getAllByTestId } = render(<Footer {...mockProp}/>);
        expect(getAllByTestId("theme-button")).toHaveLength(3);
    });
    it("should call setTheme handler when clicked on theme-button", () => {
        const mockSetThemeHandler = jest.fn();
        const mockProp = {
            theme: {
                id: 1,
                colorHexCode: "#000000",
            },
            "themes": [
                {
                    "id": 1,
                    "colorHexCode": "#000000"
                },
                {
                    "id": 2,
                    "colorHexCode": "#800080"
                },
                {
                    "id": 3,
                    "colorHexCode": "#0000FF"
                },
                {
                    "id": 4,
                    "colorHexCode": "#9B9999"
                }
            ],
            setThemeHandler: mockSetThemeHandler,
        }
        const { getAllByTestId } = render(<Footer {...mockProp}/>);
        fireEvent.click(getAllByTestId("theme-button")[0])
        expect(mockSetThemeHandler).toHaveBeenCalled();
    });

    
});