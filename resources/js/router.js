export default function route(url,callback,parameter=null){
    // console.log(new URLSearchParams(window.location.search).get('id'));

    if(url == window.location.pathname){
        if(parameter){
            callback(parameter);

        }else{
            callback();
        }
    }
}