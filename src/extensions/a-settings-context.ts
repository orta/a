import { getSettings } from "../util/settings"
import { Context } from "../context"

const setSettings = async (context: Context) => {
  context.settings = getSettings
}

module.exports = setSettings
