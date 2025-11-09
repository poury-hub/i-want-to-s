let inputboy = document.getElementById('inp');
let addboy = document.getElementById('but');
let delboy = document.getElementsByClassName('del');

let cun = -1;

addboy.onclick = function(){
    let thing = inputboy.value.trim();
    if(thing === "") return;
    console.log(thing);
    cun++
    let tclass='class'+cun;
    let t = document.createElement('tr');
    t.className=tclass
    let n = document.createElement('td');
    n.textContent = cun + ":";
    n.className=tclass
    let sub = document.createElement('td');
    sub.textContent = thing;
    sub.className=tclass
    let d = document.createElement('td')
    let b = document.createElement('button');
    b.textContent="Delete"
    b.className="delbut"
    d.append(b);
    t.append(n);
    t.append(sub);
    t.append(d);
    let tbody = document.getElementById('bod')
    let addtr = document.getElementById('addtr')
    //tbody.append(t);
    tbody.insertBefore(t , addtr)


    b.onclick = function() {
        if(confirm("are you sure?")){
            t.remove()
        }
    }
}


