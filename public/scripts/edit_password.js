$(()=>{
  const editPasswordsBtn = [...document.querySelectorAll(".edit-button")]
  console.log(editPasswordsBtn);
  editPasswordsBtn.forEach(btn => {
    const username = btn.dataset.username
    btn.addEventListener("click", () => {
      console.log(username);
      $(`.edit-form-${username}`).replaceWith(`<form>
      <input type="password" name="password" placeholder="Password"></input>
    </form>`);
    })
  })
  // $(".edit-button").click(function() {
  //   $(".edit-form").replaceWith(`<form>
  //   <input type="password" name="password" placeholder="Password"></input>
  // </form>`);
  // });
});

