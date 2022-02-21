const getBox = (title, description) => {
  return ` <div class="about-box">
    <h2>${title}</h2>
    <p class="about-desc">${description}</p>
</div>`;
};

const columnOne = document.querySelector(".about-content-column1");

const columnTwo = document.querySelector(".about-content-column2");

const column_one = [
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
];

const column_two = [
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
  {
    title: "Roll with us anywhere",
    desc: "If you want to meet local people, whether you’re visiting New York City or Chicago, there’s an app for you – and it’s called Tinder. Chat with people near and far, with features that let you match around the world. Tinder is your go-to travel mate. We’ve got you covered in 190 countries, and not even our friends at OKCupid and Match.com can say that.",
  },
];
column_two.forEach((col_data) => {
  columnTwo.innerHTML += getBox(col_data.title, col_data.desc);
});

columnTwo.innerHTML += `<div class="col-image">
<img src="https://tinder.com/static/build/build-ssg/static/about-3-3b5e5b8aacb6fea6b2fd85fad88149c1.webp"/>
</div>`;

columnOne.innerHTML += getBox(column_one[0].title, column_one[0].desc);
columnOne.innerHTML += `<div class="col-image">
<img src="https://tinder.com/static/build/build-ssg/static/about-1-11a0e98f7f446f5f6bc3a8517c38fb05.webp"/>
</div>`;

column_one.slice(1, 4).forEach((col_data) => {
  columnOne.innerHTML += getBox(col_data.title, col_data.desc);
});

columnOne.innerHTML += `<div class="col-image">
<img src="https://tinder.com/static/build/build-ssg/static/about-2-e02b3a2adab191d4777eaf36c35fa1ed.webp"/>

</div>`;
columnOne.innerHTML += getBox(column_one[4].title, column_one[4].desc);
