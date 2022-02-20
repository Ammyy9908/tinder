// handle scroll to decrease opacity of heading in hero

window.addEventListener("scroll", function (e) {
  const scroll = window.scrollY;
  const opacity = Math.max(0, Math.min(1, -scroll / 150 + 2));
  const heading = document.querySelector(".hero__heading");
  const cta_btn = document.querySelector(".app-cta");
  const hero_footer = document.querySelector(".hero-footer");
  heading.style.opacity = opacity;
  cta_btn.style.opacity = opacity;
  hero_footer.style.opacity = opacity;
});

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(() => {
  document.querySelector(
    ".testimonials"
  ).innerHTML += `<div class="testimonial">
    <div class="testimonial-body"><div class="testimonial-header">
    <h3>Testimonial Heading</h3>
</div>
<div class="seperator"></div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod distinctio doloribus enim! Impedit eaque laboriosam pariatur obcaecati dolores culpa accusantium voluptatibus dolor quod perferendis, cupiditate ullam soluta quo debitis illo?</p></div>
</div>`;
});
