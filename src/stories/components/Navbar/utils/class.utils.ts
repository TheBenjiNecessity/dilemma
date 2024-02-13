export const getNavbarClass = (
    classes: string,
    fullWidth?: boolean,
    centered?: boolean
) => {
    const positionClass = centered
        ? "absolute left-1/2 transform -translate-x-1/2"
        : "";

    return [classes, fullWidth ? "grow" : "", positionClass].join(" ");
};
