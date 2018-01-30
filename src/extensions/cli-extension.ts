import { GluegunRunContext } from "gluegun/dist/types/domain/run-context";

export default const bar = (context: GluegunRunContext) => {
  context.foo = () => {
    console.log("called foo extension")
  }
}

