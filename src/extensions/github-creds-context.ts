import { ghauth } from "../util/promised_ghauth"
import { Context } from "../context"

const setGithubCredentials = (context: Context) => {
  context.githubAuth = async () => {
    return await ghauth()
  }
}

module.exports = setGithubCredentials
