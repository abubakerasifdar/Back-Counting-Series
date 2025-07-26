
         document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
         function myFunction() {
            let input = Number(document.getElementById('input').value)
            let result = "";
            let i = input;
            do{
                result +=`${i}, `;
                console.log(result);
                i--;
            } while(i>=0)
           
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
}   
