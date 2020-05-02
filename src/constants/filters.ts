export enum SortDirection {
    Unordered = "",
    Descending = "Descending",
    Ascending = "Ascending"
}

export const orderNameMap = {
    [SortDirection.Unordered]: "",
    [SortDirection.Ascending]: "A-Z",
    [SortDirection.Descending]: "Z-A"
} as const;

export const orderDistanceMap = {
    [SortDirection.Unordered]: "",
    [SortDirection.Descending]: "Descending",
    [SortDirection.Ascending]: "Ascending"
} as const;