
export function deepclone<T>(object: T) : T {
    return JSON.parse(JSON.stringify(object));
}