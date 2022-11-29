import { genericObjectIF } from "../src/types"

export class ConfigFrontend {

  private config: genericObjectIF

  constructor() {
    this.config = {
      BACKEND_API: 'http://localhost:3000',
      EDITOR_VIEWS: [
        { 
          name: 'newsEditor',
          menuName: 'News Editor',
          menuIconImg: './assets/news-editor-icon.png'
        },
        {
          name: 'eventsEditor',
          menuName: 'Events Editor',
          menuIconImg: './assets/events-editor-icon.png'
        },
        {   
          name: 'mediaUploader', 
          menuName: 'Media Uploader',
          menuIconImg: './assets/media-uploader-icon.png'
        },
        {
          name: 'textBlockEditor',
          menuName: 'Text Block Editor',
          menuIconImg: './assets/text-block-editor-icon.png'
        }
      ]
    }
  }

  public getField(field: string) {
    return this.config[field]
  }
}


export default ConfigFrontend
