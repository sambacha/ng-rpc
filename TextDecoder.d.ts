const decoder = new TextDecoder('utf-8');
/** @ignore */
export const decodeUtf8 = (buffer?: BufferSource) => decoder.decode(buffer);

const encoder = new TextEncoder();
/** @ignore */
export const encodeUtf8 = (value?: string) => encoder.encode(value);