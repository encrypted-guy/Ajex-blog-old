document.getElementById('button').addEventListener("click",function(){

});

document.getElementById('button').addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'item.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var item = JSON.parse(this.responseText);
            
            // lorem total para
            var para = item.para;
            console.log(para);
            document.getElementById('firstpara').innerHTML = para;
            document.getElementById('secoundpara').innerHTML = para;
            
            //heading
            var heading1 = item.heading1;
            document.getElementById('heading1').innerHTML = heading1;
            var heading2 = item.heading2;
            document.getElementById('heading2').innerHTML = heading2;
            var heading3 = item.heading3;
            document.getElementById('heading3').innerHTML = heading3;

            // small para
            var smallpara = item.smallpara;
            document.getElementById('smallpara1').innerHTML = smallpara;
            document.getElementById('smallpara2').innerHTML = smallpara;
            
            // images

            var picture1 = item.picture1;
            document.getElementById('picture1').src = picture1;
            var user1 = item.picture6;
            document.getElementById('user1').src = user1;
            var picture2 = item.picture2;
            document.getElementById('picture2').src = picture2;
            var picture3 = item.picture3;
            document.getElementById('picture3').src = picture3;
            var picture4 = item.picture4;
            document.getElementById('picture4').src = picture4;
            var picture5 = item.picture5;
            document.getElementById('picture5').src = picture5;
            var picture7 = item.picture7;
            document.getElementById('picture7').src = picture7;
        }
    }
    xhr.send();
});

//---------------------------------------
document.getElementById('button').addEventListener("click",function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(text.responseText);
            var output = '';
            
            for(var i in users){
                output += '<ul>' +
                        '<img src="'+user[i].image+'" width="70" height="70">' +
                        '<li>name : '+users[i].name+'</li>' +
                        '<li>E-mail : '+users[i].email+'</li>' +
                '</ul>'
            }
            document.querySelector('#users').innerHTML = output;
        }
    }
    xhr.send();
});