import { GluegunCommand } from "gluegun/dist/types/domain/command";

const pr: GluegunCommand = {
  name: "pr",
  run: async context => {
    const { parameters, template: { generate } } = context

    const name = parameters.first

    await generate({
      template: "model.js.ejs",
      target: `models/${name}-model.js`,
      props: { name },
    })
  },
}

export default pr
