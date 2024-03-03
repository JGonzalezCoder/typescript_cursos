type alfanumerico = string | number;
type numerico = number | undefined;
type key = alfanumerico & numerico;

const n: key = 2;