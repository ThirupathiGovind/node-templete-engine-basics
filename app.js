const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// const expressHbs = require('express-handlebars');

const app = express();
// For pug template engine.
// app.set('view engine', 'pug');

// For handlebar template engine
// app.engine(
//   'hbs',
//   expressHbs({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs' })
// );
// app.set('view engine', 'hbs');

// For ejs template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, nex) => {
  res.status(400).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(4900);
