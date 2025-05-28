let box = document.querySelector(".box");
let Addproduct = document.querySelector(".Addproduct");
let Editdialog = document.querySelector(".Editdialog");
let Search = document.querySelector(".Search");
let Editname = document.querySelector(".Editname");
let Editage = document.querySelector(".Editage");
let Editscid = document.querySelector(".Editscid");
let Editimg = document.querySelector(".Editimg");
let Editselect = document.querySelector(".Editselect");
let EditSave = document.querySelector(".EditSave");
let Infodialog = document.querySelector(".Infodialog");
let Infoimg = document.querySelector(".Infoimg");
let InfoName = document.querySelector(".InfoName");
let InfoAge = document.querySelector(".InfoAge");
let InfoScid = document.querySelector(".InfoScid");
let InfoStatus = document.querySelector(".InfoStatus");
let InfoClose = document.querySelector(".InfoClose");
let idx=null

// Addproduct.onclick=()=>{
//   Adddialog.showModal()
// }

// AddSave.onclick=()=>{
//   let newUser={
//     name:Addname.value,
//     age:Addage.value,
//     status:Addselect.value=="Active"?true:false,
//     img:Addimg.value,
//     scidca:Addscid.value,
//     id:Date.now().toString()
//   }
//   product.push(newUser)
//  localStorage.setItem("product", JSON.stringify(product))
//   getData(product)
//   Adddialog.close()
//   Addname.value=""
//   Addage.value=""
// }


let product = [
  {
    name: "Smart Watch X22 PRO",
     scidca:"20% Скидка",
    age: "26$",
    status: true,
    img: "https://storage.alifshop.tj/media/images/alifshop/2352/umnye-chasy-smart-watch-x22-pro-s-remeshkom-oyster-44-mm-chernyy-1638356217500-lg.webp",
    id: "1",
  },
  {
    name: "DT NO.1 3 Max Ultra",
     scidca:"20% Скидка",
    age: "39$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/9910/umnye-chasy-dt-no-1-3-max-ultra-replika-1668067170717-lg.webp",
    id: "2",
  },
  {
    name: " Smart Watch 7 Pro",
    scidca:"20% Скидка",
    age: "16$",
    status: true,
    img: "https://storage.alifshop.tj/media/images/alifshop/6405/umnye-chasy-smart-watch-7-pro-1661930230849-lg.webp",
    id: "3",
  },
  {
    name: " Zordai Z8 Ultra Smart Watch",
    scidca:"20% Скидка",
    age: "30$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/10468/umnye-chasy-zordai-z8-ultra-smart-watch-49mm-1669279863715-lg.webp",
    id: "4",
  },
  {
    name: " Sony PlayStation 5 Slim, 1000 GB",
    scidca:"20% Скидка",
    age: "579$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/19142/igrovaya-pristavka-sony-playstation-5-1000-gb-1699959901419-lg.webp",
    id: "5",
  },
  {
    name: "Sony PlayStation 5 ",
     scidca:"20% Скидка",
    age: "650$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/20022/igrovaya-pristavka-sony-playstation-5-marvel-s-spider-man-2-limited-edition-825-gb-1703671356807-lg.webp",
    id: "6",
  },
  {
    name: "Наушники HyperX Cloud 3 ",
     scidca:"20% Скидка",
    age: "105$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/25001/kompyuternye-provodnye-naushniki-hyperx-cloud-3-krasno-chernyy-1725448264884-lg.webp",
    id: "7",
  },
  {
    name: "Razer Blackshark V2 X  ",
     scidca:"20% Скидка",
    age: "70$",
    status: false,
    img: "https://storage.alifshop.tj/media/images/alifshop/35113/kompyuternye-naushniki-razer-blackshark-v2-x-provodnye-belyy-1744782955702-lg.webp",
    id: "8",
  },
];

Search.oninput=()=>{
    let Filterdata=product
    Filterdata=Filterdata.filter(el=>el.name.toLowerCase().includes(Search.value.toLowerCase()))
    getData(Filterdata)
}

let data = JSON.parse(localStorage.getItem("data")) || [];
function Addtocart(el) {
  data.push(el);
  localStorage.setItem("data", JSON.stringify(data));
}

function getData(data) {
  box.innerHTML = "";
  data.forEach((el) => {
    let div = document.createElement("div");
    div.classList.add("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = el.name;
    let h3 = document.createElement("span");
    h3.innerHTML = el.age;
    let pSpan=document.createElement("span")
    pSpan.innerHTML=el.scidca
    pSpan.classList.add("span")
    let pStatus = document.createElement("p");
    pStatus.innerHTML = el.status ? "Active" : "Inactive";
    let img = document.createElement("img");
    img.src = el.img;
    img.classList.add("img");

    let btncart = document.createElement("button");
    btncart.innerHTML =`<svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>  B сорзину`;
    btncart.classList.add("cart");
    btncart.onclick = () => {
      Addtocart(el);
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

    let btnInfo = document.createElement("button");
      btnInfo.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</svg>
`
    btnInfo.classList.add("info");
    btnInfo.onclick = () => {
      Infodialog.showModal();
      Infoimg.src = el.img;
      InfoName.innerHTML = el.name;
      InfoAge.innerHTML = el.age;
      InfoScid.innerHTML = el.scidca;
      
    };

    div.append(img, h1,pSpan, h3, pStatus, btncart,btnEdit,btnInfo);
    box.append(div);
  });
}
getData(product);

InfoClose.onclick = () => {
  Infodialog.close();
}

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
  getData(product);
  Editdialog.close();
  Editname.value = "";
  Editage.value = "";
  Editscid.value = "";
  Editimg.value = "";
}