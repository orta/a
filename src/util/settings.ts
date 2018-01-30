const cfg = require("application-config")("artsy-a")

export interface Settings {
  prefersForks: boolean
  /** GH username */
  user: string
  /** GH token */
  token: string
}

/** Reads the user settings for a  */
export const getSettings = () =>
  new Promise<Settings>(done => {
    cfg.read(function(err, data) {
      if (err) {
        throw err
      } else {
        done(data)
      }
    })
  })

/** Write a subset of the settings to the the user settings */
export const writePartialConfig = async (settings: Partial<Settings>) => {
  const fullConfig = await getSettings()
  await writeSettings({ ...fullConfig, ...settings })
}

/** Write to the the user settings */
export const writeSettings = (settings: Settings) =>
  new Promise<Settings>(done => {
    cfg.write(settings, function(err, data) {
      if (err) {
        throw err
      } else {
        done(data)
      }
    })
  })
