export default interface newsItemCardPropsIF {
  data: {
      title: string
      body: string
      date: Date
  }
  mapIdx: number
  draftStatus: string
}
