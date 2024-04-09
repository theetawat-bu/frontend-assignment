import data, { dataProps } from '@/data/data'
import { create } from 'zustand'
type State ={
  items:dataProps[]
  selectedItems:dataProps[]
}
type Action ={
  addItem:(item:any) => void,
  removeFirst:() => void
  removeItem:(item:any) => void
}
 const useSelectedItem = create<State & Action>((set) => ({
  items: data,
  selectedItems: [],
  addItem: (item:dataProps) => set((state:any) => ({ selectedItems:  [...state.selectedItems,item]})),
  removeFirst: () => set((state:any) => ({ selectedItems:  [...state.selectedItems.slice(1)]})),
  removeItem: (item:dataProps) => set((state:any) => ({ selectedItems:state.selectedItems.filter((oldItem:any)=>oldItem !!= item) })),
}))

export default useSelectedItem