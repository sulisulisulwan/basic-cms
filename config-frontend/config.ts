
interface GenericObjectIF {
  [key: string]: any
}

export class ConfigFrontend {

  private config: GenericObjectIF

  constructor() {
    this.config = {
      BACKEND_API: 'http://localhost:3000'
    }
  }

  public getField(field: string) {
    return this.config[field]
  }
}


export default ConfigFrontend
