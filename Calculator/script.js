let string = "";
let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch{
                document.querySelector('input').value = "Error!!";
                string = "";
            }
            
        }
        else if(e.target.innerHTML=='AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})