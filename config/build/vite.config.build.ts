import { resolve } from "path"

import vite from "vite";
import { buildPlugins } from "./vite.config.plugins";
import { BuildOptions } from "./types/vite.config.types";


export function buildVite(options: BuildOptions) : vite.UserConfig {
    return {
        plugins: buildPlugins(),
        resolve: {
            alias: {
                '@': options.pathList.alias,
            }
        },
        build: {
            sourcemap: true,
            lib: {
                entry: options.pathList.entry,
                name: options.name,
                fileName: options.name,
            },
            rollupOptions: {
                external: ["vue"],
                output: {
                    globals: {
                        vue: "Vue"
                    }
                }
            }
        }
    };
}