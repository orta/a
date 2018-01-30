import { GluegunRunContext } from "gluegun/dist/types/domain/run-context"
import { Settings } from "./util/settings"
import { GHCreds } from "./util/promised_ghauth"

export interface Context extends GluegunRunContext {
  settings: () => Promise<Settings>
  githubAuth: () => Promise<GHCreds>
}
