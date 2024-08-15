import { resolve } from "path"

import { defineConfig } from 'vite'
import { buildVite } from "./config/build/vite.config.build";


// https://vitejs.dev/config/
export default defineConfig(() => {
    const config = buildVite({
        name: "uilib",
        pathList: {
            entry: resolve(__dirname, "src/main.ts"),
            alias: resolve(__dirname, "src")
        }
    });

    return config;
});
