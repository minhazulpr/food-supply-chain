export default function route(url,callback,parameter=null){
    if(url == window.location.pathname){
        if(parameter){
            callback(parameter);

        }else{
            callback();
        }
    }
}