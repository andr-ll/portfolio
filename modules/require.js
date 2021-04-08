import fs from 'fs'

export const require = (filepath, encoding = "utf8") =>
    JSON.parse(fs.readFileSync(filepath, { encoding }));

export const projects = require('./mock/projects.json')
export const {version} = require('./package.json')