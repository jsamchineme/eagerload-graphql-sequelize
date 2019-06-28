### Eager loading GraphQL with Sequelize
This project presents a demo of how we can setup eagerloading for GraphQL data with the
`graphql-sequelize-query-loader` npm package

### Learn more
Check out the query loader github repo and npm package for more info

<b>GitHub:</b> https://github.com/jsamchineme/graphql-sequelize-query-loader
<br><b>npm:</b> https://www.npmjs.com/package/graphql-sequelize-query-loader
<br>Please <b>Star</b> the project on <b>github</b>, if you like it.
<br>You can also check out the 
[blog post](https://medium.com/@johnnysam/how-i-made-an-npm-package-that-improves-server-performance-with-graphql-sequelize-b728dcae9b5f) 
that I published about how I made this utility, what it offers and how to use it in your project.

### Installation
- `npm install`
- setup DATABASE_URL environment variable using either a local or online Postgres database
- `npm run db:seed` - this will first migrate tables before seeding it
- `npm run dev` - starts up the development server

### Testing
You can switch to the branch `no-eagerload` to see the result before query-loader is introduced
<br>Then switch to the `code-with-query-loader` branch to checkout the result after query-loader is introduced.


