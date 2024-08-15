import vite from "vite";

import dts from "vite-plugin-dts"
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';


export function buildPlugins() : vite.UserConfig["plugins"] {
    return [
        vue(),
        vueJsx(),
        cssInjectedByJsPlugin(),
        dts({
            rollupTypes: true,
            tsconfigPath: "./tsconfig.app.json",
        }),
    ];
}