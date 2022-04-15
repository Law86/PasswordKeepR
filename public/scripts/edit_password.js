$(()=>{
  const editPasswordsBtn = [...document.querySelectorAll(".edit-button")];
  editPasswordsBtn.forEach(btn => {
    const username = btn.dataset.id;
    btn.addEventListener("click", () => {
      $(`.edit-form-${username}`).replaceWith(`<form method="POST" action="/passwords/edit-passwords" class="edit_form">
      <input type="password" name="password" placeholder="Password"></input>
      <button type="submit">Submit</button>
        </article>
    </form>`);
    });
  });
});

