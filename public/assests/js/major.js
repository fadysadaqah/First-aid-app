var major = ['Loss of responsiveness', 'Breathing', 'Heart', 'Head and eyes', 'Bleeding', 'Bones and muscles', 'Skin', 'Hot and cold conditions', 'Illnesses and conditions', 'Poisoning']
var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']
major.forEach(function (e, i) {
    $('.cards').append(`
<a href='/minor.html'>
<div class="card" id="`+ i + `">
            <img src="`+ major_pics[i] + `"
                alt="" />
                <div class='card-text-div' >
                    <div class="card-text">`+ e + `</div>
                </div>
        </div>
        </a>
`)
})
$('.card').on('click', function () {
    localStorage.setItem("minor_id", $(this).attr('id'));

})