
async function fetchapi(){
    try{
        let response = await fetch(`https://api.exchangerate.host/latest`);
        if(response.status==200){
            let data = await response.json();
            // console.log(data);
            display(data);
        }else{
            throw new Error("Failed to fetch")
        }
    }catch(err){
        console.log(err.message);
    }
}
fetchapi();

function display(data){
    for (const [key, value] of Object.entries(data.rates)) {
        document.getElementById('container').innerHTML += `<p><b>${key}</b>: ${value}</p>`
      }

}
document.getElementById('button').addEventListener('click', function(e){
    async function fetchapi1(){
        try{
            let response = await fetch(`https://api.exchangerate.host/latest`);
            if(response.status==200){
                let data = await response.json();
                console.log(data);
                searchdata(data);
            }else{
                throw new Error("Failed to fetch")
            }
        }catch(err){
            console.log(err.message);
        }
    }
    fetchapi1();
    e.preventDefault();
})

function searchdata(data){
    let search= document.getElementById('search').value;
    search=search.toUpperCase();
    for (const [key, value] of Object.entries(data.rates)) {
        console.log(key)
        if(key===search){
            document.getElementById('searchbar').innerHTML= `<p><b>${key}</b>: ${(value)}</p>`
      }
}}