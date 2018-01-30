import { GluegunCommand } from "gluegun/dist/types/domain/command"

const init: GluegunCommand = {
  name: "a",
  run: async context => {
    const { print } = context
    print.info("Welcome to your CLI")
  },
}

export default init
