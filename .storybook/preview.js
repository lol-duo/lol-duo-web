import ColorList from "../src/assets/colorList";

export const parameters = {
    backgrounds: {
        default: ColorList.semantic.background,
        values: [
            {
                name: ColorList.semantic.background,
                value: ColorList.semantic.background,
            },
            {
                name: "white",
                value: "white"
            }
        ],
    },
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|colorList)$/i,
            date: /Date$/,
        },
    },
}