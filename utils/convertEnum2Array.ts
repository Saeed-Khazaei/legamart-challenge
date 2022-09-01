export function enum2Array(Enum: { [x: string]: any; }) {
    return Object.keys(Enum).map((title) => {
        return { title, value: Enum[title as keyof typeof Enum], };
    });
}