// Different HTML Elements are created and an image is inserted

document.body.innerHTML = `<div class="heading-container">

<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUBJ-2l9t_A2azS3TBNUh-8XMBfTXDt7RLg&usqp=CAU' alt='isro logo' width='50px' />

<h1 class='text text-primary'>ISRO related organizations</h1>

<h3>This site shows you different organizations related to ISRO</h3>
</div>
<div id="mainContainer" class="bg-light main-container"></div>`;

// Fetching of url using async and await
const getData = async () => {
  try {
    const data = await fetch("https://isro.vercel.app/api/centres");
    var organizations = await data.json();

    mainContainer.innerHTML = "";
    organizations.centres.forEach(displayData);
  } catch (error) {
    console.log(error);
  }
};

getData();

// JSON object is called using key names
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h5 class="name">Name : <span>${obj.name}</span></h5>
  <p class="place">Place : <span>${obj.Place}</span></p>
  <p class="state">State : <span>${obj.State}</span></p>
  
  </div>
  `;
};
