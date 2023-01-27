function get_time(){
    const d = new Date();

    const day = d.getDate() >= 10 ? d.getDate() : `0${d.getDate()}`;
    const month = d.getMonth() >= 10 ? d.getMonth() : `0${d.getMonth()}`;
    const year = d.getFullYear();
    const hour = d.getHours() >= 10 ? d.getHours() : `0${d.getHours()}`;;
    const minutes = d.getMinutes() >= 10 ? d.getMinutes() : `0${d.getMinutes()}`;;

    let msg;

    if ( hour > 6 && hour < 12){
        msg = "Goood Morning"
    }else if ( hour > 12 && hour < 20){
        msg = "Good Evening :)"
    }else {
        msg = "Good Night !!"
    }


    return[`${day}.${month}.${year} - ${hour}:${minutes} H`, msg];
}


function init(){
    const data = get_time();
    const ctime = data[0]
    const msg = data[1]
    
    document.querySelector('.message').textContent = msg;
    document.querySelector('.time').textContent = ctime;
    }

window.onload = () =>  {
    init();
    setTimeout(init, 1000);
}
