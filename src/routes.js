import HomePage from './pages/home/HomePage';
import PostsPage from './pages/posts/PostsPage';
import TestPage from './pages/test/Test';

export default [
  { name: 'home', path: '/', component: HomePage },
  { name: 'posts', path: '/posts', component: PostsPage },
  { name: 'test', path: '/test', component: TestPage },
];
