const http=require("http")
const stdinfo="name:bavya\n course:mca\n year:1st subjects:html,node.js";
const server=http.createServer((req,res) =>
{
    res.writeHead(200,{'content-type':'plain'});
    res.end(stdinfo)
});
server.listen(4002,()=>
{
    console.log("server is running at http://localhost:4002/");
});