const useMember = () => {
  const getMembers = () => {
    let members = [];
    fetch("/api/members")
      .then((response) => response.json())
      .then((data) => (members = data))
      .catch((error) => console.error("Error fetching members:", error));
    return members;
  };

  React.useEffect(() => {
    getMembers();
  }, []);

  return { getMembers };
};

export default useMember;
