const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((submission) => {
    return submission.name === name;
  });
  array.splice(index, 1);
};

module.exports = {
  addSubmission: addSubmission,
  deleteSubmissionByIndex: deleteSubmissionByIndex,
  deleteSubmissionByName: deleteSubmissionByName,
};
