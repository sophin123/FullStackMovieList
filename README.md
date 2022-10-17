# FullStackMovieList

Create your movies list and saved in your database. Every user will have their own sets of database. 

How do you connect to the database ?? :)

1: Create a new cluster in MongoDB.
2: Copy the database URL 
3. Create a new file called .env in your backend root folder
4. Paste the following :
```
PORT=4000 
MONGOOSEURI="" //Paste your Database URL without quotation
SECRETKEY=themajorityofthistokenisuniquecreatedbysophin //you can have your own secret key
```

5. Run the server via
```
npm run dev
```
6. Finally run the front end server via
```
npm start
```

