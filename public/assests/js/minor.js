$(".back-arrow").attr("href",'/')
var major = [1, 2, 3];
switch (localStorage.getItem("minor_id")) {
    case '0':
        major = ['What you need to do - Unresponsive and breathing adult', 'Unresponsive and breathing child', 'Unresponsive and breathing baby', 'Unresponsive and not breathing Adult', 'Unresponsive and not breathing child', 'Unresponsive not breathing baby'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '1':
        var major = ['Asthma attack', 'Choking adult', 'Croup in children', 'Drowning','Hyperventilation'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '2':
        var major = ['Angina attack', 'Cardiac arrest', 'Heart attack','Shock'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '3':
        var major = ['Eye injuries', 'Head injuries','Headaches'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '4':
        var major = ['Cuts and grazes', 'Nose bleeds', 'Shock','Severe Bleeding'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '5':
        var major = ['Broken bones and fractures', 'Dislocated joints','Spinal injury'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '6':
        var major = ['Animal bites', 'Bedbug bites', 'Bumps and bruises', 'Burns and scalds', 'Insect stings','Blisters'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '7':
        var major = ['Dehydration', 'Frostbite', 'Heat exhaustion', 'Heat rash', 'Heatstroke','Sunburn'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '8':
        var major = ['Allergic reactions', 'Asthma attack', 'Diabetic emergency', 'Fainting', 'Fever', 'Meningitis'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;
    case '9':
        var major = ['Alcohol poisoning', 'Drug poisoning', 'Food poisoning', 'Carbon Monoxide poisoning','Swallowed poisons'];
        var major_pics = ['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSR1p-0X6Szdn4m8vOmj35iCXVMqNJVcZwK6vXg5pN7NqRWyt0q', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzZkwRZxByjXDlLIjZAq2TDZ5L87b9DOSNOacdL-JPEnAn5uYK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmg1QPhoUbMB45fMspHZRyDiRQk9VIWeXytrzFjvBq2rU7nzZ5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1uZMCcvfGdy8k5IqiaaK2TKSNZKzqnhKD_3gZ61-p-B4nJZyV', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRy35SxhwAw0fDqxriLLLSIHAhBGoiiK3IZWrPckhg1Mms6p2ag', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZtjrVmltbVjc4wOQSceoSFlTr4rsvM4AJL3982KRvfceOZtPr', 'https://ak4.picdn.net/shutterstock/videos/22624054/thumb/1.jpg', 'https://www.biospace.com/getasset/c81b3ec9-ad2f-4ebe-aba7-7da4357ca571/', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlOR_Rj4dkWhq4JuYKYVRzqNADy2jJQg6y67Y3ugi_P9npdTMr', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGAANINOkJNrftUy4j12aEMKDTvIyiKpQ1aanwxbPtdkmZQ_bf']

        break;


}
major.forEach(function (e, i) {
    $('.cards').append(`
<div class="card">
<div class="img" style="background:url(`+ major_pics[i] + `);background-position: center;background-size: cover;"></div>
          
                <div class='card-text-div'>
                    <div class="card-text">`+ e + `</div>
                </div>
               
        </div>
`)
})

$('body').on('click', '.card', function () {
window.location.href='/mini.html'
})

