import FileUpload from "../components/file-upload";
import Header from "../components/header";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 flex flex-col  items-center">
        <div className="max-w-2xl flex text-center pt-12 flex-col">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Upload your Dataset
          </h2>
          <p className="py-6 text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s
          </p>
          <FileUpload />
        </div>
      </div>
    </>
  );
};
export default DashboardPage;
