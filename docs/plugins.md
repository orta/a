# Plugin guide for a

Plugins allow you to add features to a, such as commands and
extensions to the `context` object that provides the majority of the functionality
used by a.

Creating a a plugin is easy. Just create a repo with two folders:

```
commands/
extensions/
```

A command is a file that looks something like this:

```js
// commands/foo.ts
import { GluegunCommand } from "gluegun/dist/types/domain/command"

const command:GluegunCommand = context => {
  const { print, filesystem } = context

  const desktopDirectories = filesystem.subdirectories(`~/Desktop`)
  print.info(desktopDirectories)
}

export default command
```

An extension lets you add additional features to `context`.

```js
// extensions/bar-extension.ts
import { GluegunRunContext } from "gluegun/dist/types/domain/run-context";

module.exports = (context:GluegunRunContext) => {
  const { print } = context

  context.bar = () => {
    print.info("Bar!")
  }
}
```

This is then accessible in your plugin's commands as `context.bar`.

# Loading a plugin

To load a particular plugin (which has to start with `a-*`),
install it to your project using `npm install --save-dev a-PLUGINNAME`,
and a will pick it up automatically.
