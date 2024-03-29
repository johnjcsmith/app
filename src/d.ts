import { Differential } from "@differentialhq/core";

// This is a temporary API sercret for testing purposes, created by npm init.
// Run npm run setup to replace this with your own demo API secret.
const apiSecret = process.env.DIFFERENTIAL_API_SECRET;

export const d = new Differential(apiSecret);
