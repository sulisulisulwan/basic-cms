import fs from 'fs'

console.log(fs.readFile)

interface GenericObjectInterface {
  [key: string]: any
}

export default class Config {

  private config: string
  private parsedConfig: GenericObjectInterface

  constructor(pathToConfig: string) {
    this.config = this.readConfig(pathToConfig)
    this.parsedConfig = this.parseConfig()
  }

  private readConfig(pathToConfig: string): string {
    return fs.readFileSync(pathToConfig).toString()
  }

  private parseConfig(): GenericObjectInterface {
    try {
      const parsed = JSON.parse(this.config)
      return parsed
    } catch(e: unknown) {
      console.error('Invalid JSON file.  Could not parse JSON config file.')
      return {}
    }
  }

  public getField(field: string): any {
    const value = this.parsedConfig[field as keyof GenericObjectInterface]
    return value
  }


}