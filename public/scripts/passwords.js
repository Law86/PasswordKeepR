$(() => {
  website,
  username,
  category,
  password

});

const createPasswordBox = (body) => {
  return `
    <article class="password-box">
      <section>
        <h3>${body.website}</h3>
        <h4>${body.username}</h4>
        <h4>${body.password}</h4>
        <h4>${body.category}</h4>
      </section>
      <input type="button" value="Edit">
    </article>
  `
}
