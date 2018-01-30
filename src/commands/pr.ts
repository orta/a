import { Context } from "../context"

const pr = {
  name: "pr",
  run: async (context: Context) => {
    // https://github.com/infinitered/gluegun/issues/340
    const settings = await context.settings()

    if (!settings.user) {
      console.log("Please log in with your GitHub credentials:")
      await context.githubAuth()
    }

    // Do something
  },
}

module.exports = pr
