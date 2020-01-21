

## Prerequisites


* Node.js = 12.13.0
* Express: 4.17.1
* Mongodb: 3.5.1

### Mongodb:
    The data is in the db folder located in the project directory.
    The  ollection name is "news"

Commands for run it:
    First ubicate in the proyect directory
```
    mongod -.dbpath=./db
```

```
    use news 
```

Examples of data to enter in the db:
    db.news.save({title: 'Update required',description: 'update the storage applicacation',
        date: '2020-01-10', content: 'update the storage applicacation',author: 'Bernat Exposito', archiveDate: null});

    db.news.save({title: 'Update required',description: 'update the rrhh applicacation',
        date: '2020-01-13', content: 'update the rrhh applicacation',author: 'Lluis Domenech',archiveDate: null});

    db.news.save({title: 'Holidays',description: 'From day 1 to day 8 I will be on vacations',        date: '2020-01-11',content: 'From day 1 to day 8 I will be on vacations',                      author: 'Bernat Exposito',archiveDate: null});

    db.news.save({title: 'Bug',description: 'The storage application has an error in the login',      date: '2020-01-11',content: 'The storage application has an error in the login',
         author:'Lluis Domenech',archiveDate: '2020-01-11'});

## Getting started

Launch application:
```
 npm start
 ```

* url: http://localhost:80