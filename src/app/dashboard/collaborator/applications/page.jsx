import EmptyApplications from "./EmptyApplication";

const CollaboratorApplicationsPage = () => {
  const applications = [];

  return (
    <div className="w-full">
      {applications.length === 0 ? <EmptyApplications /> : "application table"}
    </div>
  );
};

export default CollaboratorApplicationsPage;
