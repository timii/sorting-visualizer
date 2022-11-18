export function capitalizeFirstLetter(s: string): string {
    console.log("capitalizeFirstLetter -> s:", s);
    return s.charAt(0).toUpperCase() + s.slice(1);
}
