const API = 'https://jsonplaceholder.typicode.com/users';
const cards = document.querySelector('.cards');

const getData = async () => {
  const res = await fetch(API);
  const data = await res.json();
  return  data
}

getData().then((data) => mapData(data)).catch((err) => console.log(err))

function mapData(data) {
  data.forEach((item, i) => {
    return cards.innerHTML += `
    <div style="box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);" class="bg-[#fafafa] w-full rounded-[10px] p-4">
    <div class="flex gap-4 mb-4">
      <div class="w-[90px] rounded-[10px] h-[90px] flex justify-center flex-col items-center bg-[#555] shrink-0">
        <i class="fa-solid fa-user text-[60px]" style="color: #3dabff;"></i>
      </div>
      <div>
        <h3 class="text-[23px] font-semibold mb-2">${item.name}</h3>
        <div class="gap-[10px] flex items-center text-[#3dabff]">
          <i class="fa-solid fa-envelope"></i>
          <a href="https://${item.email}" >${item.email}</a>
        </div>
        <div class="gap-[10px] flex items-center">
          <i class="fa-solid fa-circle-user"></i>
          <span>${item.username}</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-location-dot"></i>
        <p  class="text-[17px]">${item.address.street} street, ${item.address.suite}</p>
      </div>
      <p><b>City:</b> ${item.address.city}</p>
      <i class="text-[14px]"><b>Zipcode:</b> ${item.address.zipcode}</i>
      <div class="flex gap-2">
        <i class="text-[13px]">lat: ${item.address.geo.lat}</i>
        <i class="text-[13px]">lng: ${item.address.geo.lng}</i>
      </div>
      <div class="flex items-center gap-2 mt-3">
        <i class="fa-solid fa-phone"></i>
        <p class="text-[17px]">${item.phone}</p>
      </div>
      <p><b>Website:</b> <a href="https://${item.website}">${item.website}</a></p>
      <div class="flex items-center gap-2 mt-3">
        <i class="fa-solid fa-building"></i>
        <p class="text-[17px]"><b>Company:</b> ${item.company.name}</p>
      </div>
      <p><b>CatchPhrase:</b> ${item.company.catchPhrase}</p>
      <i><b>bs:</b> ${item.company.bs}</i>
    </div>
  </div>
    `
  })
}