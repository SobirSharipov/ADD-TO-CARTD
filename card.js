let box = document.querySelector(".box");
let Editdialog = document.querySelector(".Editdialog");
let Editname = document.querySelector(".Editname");
let Editage = document.querySelector(".Editage");
let Editscid = document.querySelector(".Editscid");
let Editimg = document.querySelector(".Editimg");
let Editselect = document.querySelector(".Editselect");
let EditSave = document.querySelector(".EditSave");
let Search = document.querySelector(".Search");
let idx=null

let product = JSON.parse(localStorage.getItem("data")) || [];

Search.oninput=()=>{
    let Filterdata=product
    Filterdata=Filterdata.filter(el=>el.name.toLowerCase().includes(Search.value.toLowerCase()))
    CartAdd(Filterdata)
}

function deleteCart(id) {
  product = product.filter((el) => el.id != id);
  localStorage.setItem("data", JSON.stringify(product));
  CartAdd(product);
}

function CartAdd(data) {
  box.innerHTML = "";
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = el.name;
    let h3 = document.createElement("span");
    h3.innerHTML = el.age;
    let pSpan = document.createElement("span");
    pSpan.innerHTML = el.scidca;
    pSpan.classList.add("span");
    let pStatus = document.createElement("p");
    pStatus.innerHTML = el.status ? "Active" : "Inactive";
    let img = document.createElement("img");
    img.src = el.img;
    img.classList.add("img");

    let btnDelet = document.createElement("button");
    btnDelet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
`;
    btnDelet.classList.add("btnDelet");
    btnDelet.onclick = () => {
      deleteCart(el.id);
    };

     let btnEdit = document.createElement("button"); 
    btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
`;
    btnEdit.classList.add("edit");
    btnEdit.onclick = () => {
      Editdialog.showModal();
      Editname.value = el.name;
      Editage.value = el.age;
      Editscid.value = el.scidca;
      Editimg.value = el.img;
      Editselect.value = el.status ? "Active" : "Inactive";
      idx = el.id;
    };
    div.append(img, h1,pSpan, h3, pStatus, btnDelet,btnEdit);
    box.append(div);
  });
}
CartAdd(product);



EditSave.onclick = () => {
  let newUser = {
    name: Editname.value,
    age: Editage.value,
    status: Editselect.value == "Active" ? true : false,
    img: Editimg.value,
    scidca: Editscid.value,
    id: idx,
  };
  product = product.map((el) => (el.id == idx ? newUser : el));
  localStorage.setItem("data", JSON.stringify(product));
  CartAdd(product);
  Editdialog.close();
  Editname.value = "";
  Editage.value = "";
  Editscid.value = "";
  Editimg.value = "";
}