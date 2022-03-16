declare module "parse-css-color" {
  export = parseCSSColor

  export interface Result {
    readonly alpha: number
    readonly type: string
    readonly values: number[]
  } | null

  function parseCSSColor(str: string): Result
}
