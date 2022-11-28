interface genericObjectIF {
  [key: string]: any 
}
export default interface formModalPropsIF {
  type: string
  setModal: React.Dispatch<string>
  cardDataFocus: genericObjectIF | null
}
