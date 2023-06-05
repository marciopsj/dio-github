const RepoItem = ({ title, description }) => {
  return (
    <div className="repositories__info">
      <h3 className="repositories__title">{title}</h3>
      <p className="repositories__description text">{description}</p>
      <hr className="separator" />
    </div>
  );
};

export default RepoItem;
