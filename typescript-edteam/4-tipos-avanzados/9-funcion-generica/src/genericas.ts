const Ping: any = "";

interface Ping<T, U> {
    host: T;
    location: U;
}

const Network: Ping<number, string> = {
    host: 127,
    location: "1234567890"
}