import axios from 'axios';
import { GET_NEXT } from '../action';
const chapterId = store.getState().game.chapterId;

const nextMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_NEXT:
      axios({
        method: 'get',
        url: `http://localhost:3001/play/narration/${chapterId}`
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(getChapterSucces(res.data));
        })
        .catch((err) => {
          console.log(err);
          store.dispatch(getChapterError('Impossible de récupérer les chapitres...'))
        })
      break;
    default:
      return;
  }
};

export default nextMiddleware;

