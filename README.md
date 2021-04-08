# Express Handlebars Template

## A simple app for small projects (landing pages, etc.)

### For usage install 'Live SASS compiler', and change setting to following:

```
    {
    "workbench.startupEditor": "newUntitledFile",
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.minimap.enabled": false,
    "git.autofetch": true,
    "explorer.confirmDelete": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "files.associations": {
        "*.tsx": "typescriptreact"
    },
    "editor.snippetSuggestions": "top",
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tabnine.experimentalAutoImports": true,
    "liveSassCompile.settings.formats": [

        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/public/css"
        }
    ],
    "liveSassCompile.settings.generateMap": false
    }
```

`npm run dev` - Development mode

`npm start` - Production mode