document.getElementById("bt1").addEventListener("click",getPosition);

function getPosition(){
    
    var watchID =navigator.geolocation.getCurrentPosition(onSuccess,onError);
    
    function onSuccess(position)
    {
        //var x='Latitude: '+position.coords.latitude+'\n' +'Longitude :'+position.coords.longitude+'\n'
    //  document.getElementById("id1").innerHTML=x;  
        
    alert('Latitude: '+position.coords.latitude+'\n' +'Longitude :'+position.coords.longitude+'\n');
    var x= position.coords.latitude;
        var y=position.coords.longitude;
        document.getElementById("id2").value="(LATITUDE:"+x+" ,LONGITUDE: "+y+" )";    
    }
    function onError(error){
        
        alert('code : '+error.code+'\n' +'message:'+error.message+'\n');
        
        
    }
}