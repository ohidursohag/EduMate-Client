import SideBar from "@/Components/DashBoardLayoutComponents/Shared/SideBar/SideBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div> {children} </div>
    </div>
  );
};

export default DashBoardLayout;
