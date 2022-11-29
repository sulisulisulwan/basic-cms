import fs from 'fs'
import { genericObjectIF } from '../src/types'

export default class Config {

  private config: string
  private parsedConfig: genericObjectIF

  constructor(pathToConfig: string) {
    this.config = this.readConfig(pathToConfig)
    this.parsedConfig = this.parseConfig()
  }

  private readConfig(pathToConfig: string): string {
    return fs.readFileSync(pathToConfig).toString()
  }

  private parseConfig(): genericObjectIF {
    try {
      const parsed = JSON.parse(this.config)
      return parsed
    } catch(e: unknown) {
      console.error('Invalid JSON file.  Could not parse JSON config file.')
      return {}
    }
  }

  public getField(field: string): any {
    const value = this.parsedConfig[field as keyof genericObjectIF]
    return value
  }


}