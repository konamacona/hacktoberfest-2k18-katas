import { gcd } from "./gcd";
export const lcm = (a, b) => (a / gcd(a, b)) * b || null;
