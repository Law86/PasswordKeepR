const categories = {
  social: 'Social',
  entertainment: 'Entertainment',
  productivity: 'Productivity',
  banking: 'Banking',
  health_wellness: 'Wellness',
  misc: 'Miscellaneous'
}

$(() => {

  $('#category').on('change', function() {
    filterByTag(categories[this.value]);
  });

});

const filterByTag = (tag) => {
  if (!tag) {
    $('#password-container').find(`article`).show();
  } else {
    $('#password-container').find(`article:not(.${tag})`).hide();
    $('#password-container').find(`article.${tag}`).show();
  }
};

