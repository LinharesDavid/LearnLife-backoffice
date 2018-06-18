# ***Run mongo and backup/restore the DB***

## On Mac

### Install mongo 

```
brew install mongodb
```

### Create the folder for the db

```
sudo mkdir /data/learn-life-db
```

### If you have a tar.gz of the data
```
sudo tar xzvf ~/Desktop/learn-life-d.tar.gz -C /
```

### Run mongo on this folder
In another terminal of course

```
sudo mongod --dbpath /data/learn-life-db/
```

### Save the data

Just copy the content of the folder (maybe compress it)
in ~/Desktop
```
sudo tar czvf learn-life-db.tar.gz /data/learn-life-db
```


## On Windaube

### Install mongo

[here](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)

### Have fun je sais pas comment on fait mais ca doit etre a peu près pareil, mais je connais pas les commandes.
