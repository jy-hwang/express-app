
const express = require('express');
const path = require('path');
const PORT = 4000;
const HOST = 'localhost';

const app = express();

// 특정 엔진을 템플릿 엔진으로 사용하기 위한 설정
app.set('view engine', 'hbs');
// view 파일들이 모여있는 폴더를 명시
app.set('views', path.join(__dirname, 'views'));

//app.use(express.static('public'));
//app.use('/static', express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end : ${req.method} ${req.url} ${diffTime}ms`);
});

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('index', { imageTitle: "It is a cute jordy doll by rendered hbs" });
});

const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
});
