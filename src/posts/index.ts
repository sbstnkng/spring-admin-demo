import PostIcon from '@material-ui/icons/Book';

import { PostList } from './PostList';
import { PostCreate } from './PostCreate';
import { PostEdit } from './PostEdit';

const postsConfig = {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  icon: PostIcon,
};

export default postsConfig;
