
if (typeof api === 'undefined') {
    const api = Object.freeze("http://localhost:3000/notes");
    const dodo = document.getElementById("do");
    const sisi = document.getElementById("si");
    const riri = document.getElementById("ri");
    const fafa = document.getElementById("fa");
    const sol = document.getElementById("sol");
    const mimi = document.getElementById("mi");
    const lala = document.getElementById("la");
    const top = document.getElementById("top");
    const type = document.getElementById("starttyping");
    const save = document.getElementById("save");
    const dlt = document.getElementById("delete");
    const par = document.getElementById("par");

    const fun = async () => {
      try {
        const response = await fetch(api, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error("Error happened while trying to fetch");
        }
        const data = await response.json();  

        data.forEach(dat => {
          if (dat.note.toLowerCase() === "do") {
            dodo.addEventListener("click", () => {
              const audio = new Audio(dat.file1);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "re") {
            riri.addEventListener("click", () => {
              const audio = new Audio(dat.file2);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "mi") {
            mimi.addEventListener("click", () => {
              const audio = new Audio(dat.file3);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "fa") {
            fafa.addEventListener("click", () => {
              const audio = new Audio(dat.file4);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "sol") {
            sol.addEventListener("click", () => {
              const audio = new Audio(dat.file5);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "la") {
            lala.addEventListener("click", () => {
              const audio = new Audio(dat.file6);
              audio.play();
            });
          }

          if (dat.note.toLowerCase() === "si") {
            sisi.addEventListener("click", () => {
              const audio = new Audio(dat.file7);
              audio.play();
            });
          }
        });
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Abort error happened");
        } else {
          console.log("Error:", err);
        }
      }
    };

    fun();

    const api2 = Object.freeze("http://localhost:3000/melodies");

    //id fetch
    const ftechid = async() =>{
    try{
      const response = await fetch(api2, {cache: "no-cache"});
      if(!response.ok){
        throw new Error("err happend");
      }
      const data = await response.json();
      const id = data.length ? data[data.length - 1].id : 1;
      return id;

    }catch(err){
      console.log("Error:",err);
    }
    }
    //saving function fetch
const saver = async (melody, titlee) =>{
      const idd = await ftechid();
      
      try{
        const response = await fetch(api2, {
          cache: "no-cache",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ text: melody , id: idd, title: titlee})
        })
        if(!response.ok){
          throw new Error("erro happernd while trying to post tfetch");
        }
        const data = await response.json();
      }catch(err){
        if(err.name == "AbortError"){
          console.log("abort error did happen");
        }else{
          console.log("err:",err);
        }
      }
    }

    let melody = "";
    let typing = false;

    type.addEventListener("click",()=>{
      typing = true;
      melody = "";
      if (!document.querySelector(".h22")) {
          const h2 = document.createElement("h2");
          h2.textContent = "🎵 Start typing your melody by clicking notes...";
          h2.classList.add("h22");
          top.appendChild(h2);
      }
    })


    const appendNote = (note) => {
      if (!typing) return;
      melody += note + " ";
      par.textContent = melody;
    };

    dodo.addEventListener("click", () => appendNote("do"));
    riri.addEventListener("click", () => appendNote("re"));
    mimi.addEventListener("click", () => appendNote("mi"));
    fafa.addEventListener("click", () => appendNote("fa"));
    sol.addEventListener("click", () => appendNote("sol"));
    lala.addEventListener("click", () => appendNote("la"));
    sisi.addEventListener("click", () => appendNote("si"));


    //sav button here 
    const savedmelody = document.getElementById("savedmelodies");
    save.addEventListener("click", () => {
      
    const diver = document.createElement("div");
    const input = document.createElement("input");
    input.placeholder = "Enter title";
    const btn = document.createElement("button");
    btn.textContent = "Save";
    btn.className = "paro";
    
    diver.appendChild(input);
    diver.appendChild(btn);
    savedmelody.appendChild(diver);

        btn.addEventListener("click", async () => {
          const putedtitle = input.value.trim();
          await saver(melody, putedtitle || "undefined");
          savedmelody.innerHTML = "";
          par.textContent = "";
          melody = "";
          typing = false;
        });
  });


    dlt.addEventListener("click",()=> {
      par.textContent = "";
      melody = "";
      typing = false;
      if(document.querySelector(".h22")){
        document.querySelector(".h22").textContent ="";
      }
    })
} 
