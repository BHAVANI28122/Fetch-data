console.log("hello world");



fetch("https://gauravgitacc.github.io/postAppData/auctionData.json").then((res)=> res.json()).then((data)=> {
    console.log("Data",data);
     let text="";

   
    data.forEach((element) =>{

      text +=  `<div class="item">

          <div class="status">
        <div>
       <h2 class="${element.status == "PENDING" ? "yellow" :element.status == "COMPLETED" ? "green":element.status == "CANCELLED"? "red" :"blue"}">${element.status}</h2>
       <p>${element.caseNumber}</p>
        </div>
        <p>${element.date}</p>
       </div>
       
        <hr>

        <h3>${element.fromLocation}</h3>
        <p>${element.toLocation}</p>

        <p style="text-align: right;">${element.fare}</p>
        </div>`

    });
    document.querySelector(".container").innerHTML = text;

});

