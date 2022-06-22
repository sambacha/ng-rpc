/** @ignore */
export function compareArrayLike<T extends ArrayLike<any>>(a: T, b: T) {
    let i = 0;
    const n = a.length;
    if (n !== b.length) { return false; }
    if (n > 0) {
        do { if (a[i] !== b[i]) { return false; } } while (++i < n);
    }
    return true;
}