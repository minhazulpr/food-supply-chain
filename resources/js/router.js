export default function route(url,callback){
    if(url == window.location.pathname){
        callback();
    }
}