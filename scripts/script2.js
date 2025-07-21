document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/melodies', {
            cache: "no-cache"
        });
        
        if (!response.ok) {
            throw new Error("Errs fetching melodies");
        }
        
        const data = await response.json();
        const arty = document.getElementById('arty');
        
        data.forEach(element => {
            const div = document.createElement("div");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            
            h2.textContent = element.title;
            p.textContent = element.text;
            p.className = "par";
            h2.className = "h22";
            div.className = "div";
            
            div.appendChild(h2);
            div.appendChild(p);
            
            div.addEventListener("dblclick", () => {
                if (div.querySelector('.btn')) return;
                
                const btn = document.createElement("button");
                btn.textContent = "Delete";
                btn.className = "btn";
                
                btn.addEventListener("click", async () => {
                    try {
                        await fetch(`http://localhost:3000/melodies/${melody.id}`, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" }
                        });

                        
                        if (!response.ok) {
                            throw new Error("Failed to delete melody");
                        }
                        div.remove();
                        
                    } catch (err) {
                        console.error("Error:", err);
                    }
                });
                
                div.appendChild(btn);
            
                setTimeout(() => {
                    if (div.contains(btn)) {
                        btn.remove();
                    }
                }, 5000);
            });
            
            arty.appendChild(div);
        });
        
    } catch (err) {
        if (err.name === "AbortError") {
            console.log("Fetch aborted");
        } else {
            console.error("Error:", err);
        }
    }
});
