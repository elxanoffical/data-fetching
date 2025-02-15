const jsonServer = require("json-server");
const server = jsonServer.create(); // funksiyası vasitəsilə yeni bir server yaradılır.

const router = jsonServer.router("db.json"); //  funksiyası vasitəsilə db.json faylı əsasında bir router yaradılır.
const middlewares = jsonServer.defaults(); //  funksiyası vasitəsilə JSON Server üçün standart middleware-lər alınır.

server.use(middlewares); // funksiyası vasitəsilə əvvəlcədən alınmış middleware-lər serverə əlavə edilir.
//  Bu, serverin gələn sorğuları emal etməzdən əvvəl bu middleware-lərdən keçməsini təmin edir.

server.use((req, res, next) => {
  console.log("Request Received");
  res.header("Access-Control-Allow-Origin", "*");  //  Bütün mənbələrdən gələn sorğulara icazə verir (*).
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS" // Müxtəlif HTTP metodlarına icazə verir.
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"  //  Müxtəlif HTTP başlıqlarına icazə verir.
  );
  next();  // Sorğunun növbəti middleware-ə və ya router-ə keçməsini təmin edir.    
});

server.use(router);

server.listen(3001, () => {
  console.log("JSON Server is running");
});
