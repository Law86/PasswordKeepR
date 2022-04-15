$(()=>{
  const editPasswordsBtn = [...document.querySelectorAll(".edit-button")]
  console.log(editPasswordsBtn);
  editPasswordsBtn.forEach(btn => {
    const username = btn.dataset.id;
    console.log(username);
    btn.addEventListener("click", () => {
      //console.log(id);
      $(`.edit-form-${username}`).replaceWith(`<form method="POST" action="/passwords/edit-passwords" class="edit_form">
      <input type="password" name="password" placeholder="Password"></input>
      <button type="submit">Submit</button>
        </article>
    </form>`);
    })
  })
});

