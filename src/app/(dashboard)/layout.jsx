import SideBar from "@/components/DashBoardLayoutComponents/Shared/SideBar/SideBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <div> {children} </div>
    </div>
  );
};

export default DashBoardLayout;
