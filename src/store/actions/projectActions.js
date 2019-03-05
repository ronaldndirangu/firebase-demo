export const createProject = (project, history) => (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;

  firestore.collection('projects').add({
    ...project,
    authorId,
    authorFirstName: profile.firstName,
    authorLastName: profile.lastName,
    createdAt: new Date()
  }).then(() => {
    dispatch({ type: 'CREATE_PROJECT', project });
    history.push('/');
  })
    .catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    });
};
