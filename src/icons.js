// Icons
// Purpose: To add icon classes to the home page blocks

window.addEventListener('DOMContentLoaded', () => {
  const homePageBlocks = document.querySelectorAll('.block-icon');
  homePageBlocks.forEach((item) => {
    item.className = `${item?.attributes[1]?.value
      ?.replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-')
      .toLowerCase()} block-icon`;
  });
});
