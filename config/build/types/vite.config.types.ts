export interface BuildPathList {
    entry: string,
    alias: string
}

export interface BuildOptions {
    name: string,
    pathList: BuildPathList
}