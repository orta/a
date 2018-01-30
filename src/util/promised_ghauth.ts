import * as ghauthModule from "ghauth"

const authOptions = {
  configName: "artsy-a",
  scopes: ["user", "repo"],
  note: "Artsy's `a` command-line interface",
  userAgent: "artsy-a",
}

export interface GHCreds { user: string, token: string }

/**
 * Promisifys the ghauth module
 * https://www.npmjs.com/package/ghauth
 * 
 */
export const ghauth = () => new Promise<GHCreds>((done) => {
  ghauthModule(authOptions, function (err, authData) {
    if (err) {
      throw err
    }
    return authData
  })
})
