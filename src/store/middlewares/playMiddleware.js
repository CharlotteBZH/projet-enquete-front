import axios from 'axios';
import { GET_CHAPTER, getChapterSucces, getChapterError, getStorytellingSucces } from '../action';

const playMiddleware = (store) => (next) => (action) => {
  const chapterId = store.getState().game.chapterId;
  next(action);
  switch (action.type) {
    case GET_CHAPTER:

      axios({
        method: 'get',
        url: `http://localhost:3001/play/situation/${chapterId}`
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getChapterSucces(res.data));


          axios({
            method: 'get',
            url: `http://localhost:3001/play/storytelling/${chapterId}`
          })
            .then((res) => {
              console.log(res.data);
              store.dispatch(getStorytellingSucces(res.data));
            })
            .catch((err) => {
              console.log(err);
              store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
            })



        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
        })


      // axios({
      //   method: 'get',
      //   url: `http://localhost:3001/play/situation/${chapterId}`
      // })
      //   .then((res) => {
      //     console.log(res.data);
      //     store.dispatch(getChapterSucces(res.data));
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
      //   })
      break;
    default:
      return;
  }
};

export default playMiddleware;
