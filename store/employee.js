import { create } from 'zustand';

const employeeStore = create((set) => ({
  employeeDetails: [], id: {},
  empId: (id) => set(() => ({ id: id })),
  addItem: (employeeDetails) => set((state) => { return { employeeDetails: [...state.employeeDetails, employeeDetails] } }),
  InitialFetchEmployee: (employeeDetails) => set((state) => ({ employeeDetails: employeeDetails })),
  updateEmployee: (newItem) => set((state) => {
    return {
      employeeDetails: state?.employeeDetails?.map((employeeDetails) => employeeDetails.id === newItem.id ? newItem : employeeDetails)
    }
  }),
  deleteEmployee:(id)=>set((state)=>{
    return{
      employeeDetails:state?.employeeDetails?.filter((ele,index)=>ele.id !== id)
    }
  })
}));

export default employeeStore;
