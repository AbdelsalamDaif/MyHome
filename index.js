var IsLoged = false;

axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    // handle success
    console.log(response);
    var web_content = document.querySelector(".web_container_right");
    console.log(web_content);
    response.data.forEach((element, index) => {
      web_content.innerHTML += `
        <div class="property_card card" style="">
        <a onclick="HomeDetails(${element.index})">
        <img class="property_image" src="${element.image}" class="card-img-top" alt="...">
        </a>
        <div class="card-body">
            <h3 class="card-text"> <i class="fa-solid fa-sterling-sign"></i> ${element.price} </h3>
            <p class="card-text"> ${element.title}</p>
            <p class="card-text"><i class="fa-solid fa-location-dot"></i> ${element.title}</p>
            <div class="property_rooms">
            <p> <i class="fa-regular fa-hospital"></i> dkvsf </p>
            <p> <i class="fa-solid fa-restroom"></i> dkvsf </p>
            <p> <i class="fa-regular fa-square"></i> dkvsf </p>
            </div>
            
        </div>

        <div class="card-body">
        <a href="#" class="card-link"> <i class="fa-solid fa-phone"></i> Phone</a>
        <a href="#" class="card-link"> <i class="fa-brands fa-whatsapp"></i> Whats </a>
      </div>
       
        </div>
    `;
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

function sendMessage(message) {
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if (!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}


// github: omar-bakhsh
function send_handle() {

  let num = document.getElementById("number").value;

  let msg = document.getElementById("msg").value;

  let name = document.getElementById("name").value;

  var win = window.open(`https://wa.me/${num}?text=I%27m%20api%20msg%20hello%20${name}%20friend%20${msg}`, '_blank');
  // win.focus();
}

function getPrice() {
  // $('#exampleModal').modal('show');
  // let model_test = document.querySelector("#exampleModal");

  // document.querySelector("#exampleModal").classList.add("show");
  // document.querySelector("#exampleModal").style.display = "block";

  // new bootstrap.Modal(document.querySelector("#exampleModalCenter")).show();

  const modalElement = bootstrap.Modal.getOrCreateInstance('#modalElement');
  modalElement.show();
}


login();

function login() {
  IsLoged = true;
  if (IsLoged) {
    docs = document.getElementsByClassName("nav_item_login");
    console.log(docs);
    var elems = document.getElementsByClassName("nav_item_login");
    // var collapsedElems = document.getElementsByClassName("collapsed");
    var earray = Array.prototype.slice.call(elems, 0);
    // var concatenated = earray.concat.apply(earray, collapsedElems);
    console.log(earray);
    earray.forEach((element,index)=>{
      element.classList.add("user_loged");
      console.log(element)
    })

  }

  const options = {
    method: 'POST',
    url: 'https://jwt-bearer-auth1.p.rapidapi.com/register',
    headers: {
      'content-type': 'application/json',
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
    },
    data: {
      email: 'test@gdomain.com',
      password: 'password123.',
      role: 'user'
    }
  };

  try {
    const response = axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function HomeDetails(index) {

  console.log(index)
  var p = document.querySelector(".HomeDetails");
  console.log(p);
}